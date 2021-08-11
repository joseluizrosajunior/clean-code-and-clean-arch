import Order from '../entity/Order';

export default interface OrderRepository {
    getAllOrders(): Order[];
}