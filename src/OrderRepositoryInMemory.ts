import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryInMemory implements OrderRepository {

    private orders = [
        new Order('17465722560')
    ];

    getAllOrders(): Order[] {
        return this.orders;
    }

}