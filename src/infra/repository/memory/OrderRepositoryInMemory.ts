import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryInMemory implements OrderRepository {

    private orders = [
        new Order('17465722560')
    ];

    getAllOrders(): Order[] {
        return this.orders;
    }

}