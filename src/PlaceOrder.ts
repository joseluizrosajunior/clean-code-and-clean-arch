import Order from './Order';
import Coupon from './Coupon';
import PlaceOrderInput from './PlaceOrderInput';
import Product from './Product';
import FreigthCalculator from './FreigthCalculator';
import DistanceApi from './DistanceApi';
import ProductRepository from './ProductRepository';
import OrderRepository from './OrderRepository';

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

    execute (input: PlaceOrderInput) {
        const order = new Order(input.cpf, this.orderRepository);
        const distance = this.distanceApi.getDistance('88815333', input.destiny);
        for (const orderItem of input.items) {
            const item = this.productRepository.getProductById(orderItem.id);
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