import OrderRepositoryInMemory from "../../src/infra/repository/memory/OrderRepositoryInMemory";

test('Deve obter uma lista de pedidos', () => {
    const repository = new OrderRepositoryInMemory();
    expect(repository.getAllOrders().length).toBeGreaterThan(0);
});