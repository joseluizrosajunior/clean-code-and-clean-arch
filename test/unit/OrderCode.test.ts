import OrderCode from "../../src/domain/entity/OrderCode";
import OrderRepositoryInMemory from "../../src/infra/repository/memory/OrderRepositoryInMemory";

test('Deve gerar o código do pedido', () => {
    const year = (new Date()).getFullYear();
    const code = new OrderCode(new OrderRepositoryInMemory());
    expect(code.value).toBe(`${year}00000002`);
});