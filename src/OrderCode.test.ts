import OrderCode from "./OrderCode";
import OrderRepositoryInMemory from "./OrderRepositoryInMemory";

test('Deve gerar o código do pedido', () => {
    const year = (new Date()).getFullYear();
    const code = new OrderCode(new OrderRepositoryInMemory());
    expect(code.value).toBe(`${year}00000002`);
});