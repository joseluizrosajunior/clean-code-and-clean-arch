import Order from './Order';

export default interface OrderRepository {
    getAllOrders(): Order[];
}