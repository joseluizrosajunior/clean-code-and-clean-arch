import Order from './Order';
import Coupon from './Coupon';

export default class PlaceOrder {
    coupons: Coupon[];
    orders: Order[];

    constructor () {
        this.coupons = [
            new Coupon('VALE20', 20, new Date('2500-12-31')),
            new Coupon('EXPIRED', 20, new Date('2000-12-31'))
        ];
        this.orders = [];
    }

    execute (input: any) {
        const order = new Order(input.cpf);
        for (const item of input.items) {
            order.addItem(item.description, item.price, item.quantity);
        }
        if (input.coupon) {
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
            if (coupon) order.addCoupon(coupon);
        }
        const total = order.getTotal();
        this.orders.push(order);
        return {
            total
        };
    }
}