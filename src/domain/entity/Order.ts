import Coupon from './Coupon';
import Cpf from './Cpf';
import OrderItem from './OrderItem';
import OrderCode from './OrderCode';
import OrderRepository from '../repository/OrderRepository';

export default class Order {
    id: OrderCode;
    cpf: Cpf;
    items: OrderItem[];
    coupon: Coupon | undefined;
    freigth: number;

    constructor (cpf: string, orderRepository?: OrderRepository) {
        this.cpf = new Cpf(cpf);
        this.items = [];
        this.freigth = 0;
        this.id = new OrderCode(orderRepository);
    }

    addItem (id: string, price: number, quantity: number) {
        this.items.push(new OrderItem(id, price, quantity));
    }

    addCoupon (coupon: Coupon) {
		if (coupon.isExpired()) throw new Error('Coupon expired');
        this.coupon = coupon;
    }

    getTotal () {
        let total = 0;
        for (const orderItem of this.items) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= (total * this.coupon.percentage)/100;
        }
        total += this.freigth;
        return total;
    }
}