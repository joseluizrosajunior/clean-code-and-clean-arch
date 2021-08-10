import Order from './Order';
import Coupon from './Coupon';
import PlaceOrderInput from './PlaceOrderInput';
import Product from './Product';
import FreigthCalculator from './FreigthCalculator';
import DistanceApi from './DistanceApi';

export default class PlaceOrder {
    coupons: Coupon[];
    orders: Order[];
    products: Product[];
    distanceApi: DistanceApi;

    constructor (distanceApi: DistanceApi) {
        this.coupons = [
            new Coupon('VALE20', 20, new Date('2500-12-31')),
            new Coupon('EXPIRED', 20, new Date('2000-12-31'))
        ];
        this.orders = [];
        this.products = [
            new Product('1', 'Guitarra', 1000, 20, 100, 30, 10),
            new Product('2', 'Amplificador', 5000, 50, 50, 50, 22),
            new Product('3', 'Cabo', 30, 10, 10, 10, 1)
        ],
        this.distanceApi = distanceApi;
    }

    execute (input: PlaceOrderInput) {
        const order = new Order(input.cpf);
        const distance = this.distanceApi.getDistance('88815333', input.destiny);
        for (const orderItem of input.items) {
            const item = this.products.find(item => item.id === orderItem.id);
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