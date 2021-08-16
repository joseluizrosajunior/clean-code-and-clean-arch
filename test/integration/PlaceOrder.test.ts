import DistanceApiInMemory from '../../src/infra/gateway/memory/DistanceApiInMemory';
import OrderRepositoryInMemory from '../../src/infra/repository/memory/OrderRepositoryInMemory';
import PlaceOrder from '../../src/application/PlaceOrder';
import PlaceOrderInput from '../../src/application/PlaceOrderInput';
import ProductRepositoryInMemory from '../../src/infra/repository/memory/ProductRepositoryInMemory';

test('Deve fazer um pedido', async () => {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        items: [
            { id: '1', quantity: 2},
            { id: '2', quantity: 1},
            { id: '3', quantity: 3}
        ],
        coupon: 'VALE20',
        destiny: '88851222'
    });
    const placeOrder = new PlaceOrder(new DistanceApiInMemory(), new ProductRepositoryInMemory(), new OrderRepositoryInMemory());
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(6122);
});

test.skip('Não deve fazer um pedido com cupom expirado', async () => {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        items: [
            { id: '1', quantity: 2},
            { id: '2', quantity: 1},
            { id: '3', quantity: 3}
        ],
        coupon: 'EXPIRED',
        destiny: '88815000'
    });
    const placeOrder = new PlaceOrder(new DistanceApiInMemory(), new ProductRepositoryInMemory(), new OrderRepositoryInMemory());
    expect(async() => await placeOrder.execute(input)).toThrow(new Error('Coupon expired'));
});

test('Deve fazer um pedido com frete', async () => {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        items: [
            { id: '1', quantity: 2},
            { id: '2', quantity: 1},
            { id: '3', quantity: 3}
        ],
        destiny: '88815333'
    });
    const placeOrder = new PlaceOrder(new DistanceApiInMemory(), new ProductRepositoryInMemory(), new OrderRepositoryInMemory());
    const output = await placeOrder.execute(input);
    expect(output.freigth).toBe(450);
});