import OrderRepository from "../repository/OrderRepository";

export default class OrderCode {
    orderRepository?: OrderRepository;
    value: string;
    constructor(orderRepository?: OrderRepository) {
        this.orderRepository = orderRepository;
        this.value = this.generateValue();
    }

    generateValue(): string {
        if (!this.orderRepository) return '202100000001';
        const year = (new Date()).getFullYear();
        const sequencial = (this.orderRepository.getAllOrders().length + 1).toString().padStart(8, '0');
        return `${year}${sequencial}`;
    }
}