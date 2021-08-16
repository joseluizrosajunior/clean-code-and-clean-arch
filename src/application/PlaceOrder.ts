import Order from '../domain/entity/Order';
import Coupon from '../domain/entity/Coupon';
import PlaceOrderInput from './PlaceOrderInput';
import DistanceApi from '../domain/gateway/DistanceApi';
import ProductRepository from '../domain/repository/ProductRepository';
import OrderRepository from '../domain/repository/OrderRepository';
import FreigthCalculator from '../domain/service/FreigthCalculator';

export default class PlaceOrder {
    coupons: Coupon[];
    orders: Order[];
    productRepository: ProductRepository;
    distanceApi: DistanceApi;
    orderRepository: OrderRepository;

    constructor (distanceApi: DistanceApi, productRepository: ProductRepository, orderRepository: OrderRepository) {
        this.coupons = [
            new Coupon('VALE20', 20, new Date('2500-12-31')),
            new Coupon('EXPIRED', 20, new Date('2000-12-31'))
        ];
        this.orders = [];
        this.productRepository = productRepository,
        this.orderRepository = orderRepository;
        this.distanceApi = distanceApi;
    }

    async execute (input: PlaceOrderInput) {
        const order = new Order(input.cpf, this.orderRepository);
        const distance = this.distanceApi.getDistance('88815333', input.destiny);
        for (const orderItem of input.items) {
            const item = await this.productRepository.getById(orderItem.id);
            if (!item) throw new Error("Item not found");
            order.addItem(orderItem.id, item.price, orderItem.quantity);
            const freigthCalculator = new FreigthCalculator(item, distance);
            order.freigth += freigthCalculator.execute() * orderItem.quantity;
        }
        if (input.coupon) {
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
            if (coupon) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orders.push(order);
        return {
            total,
            freigth: order.freigth
        };
    }
}