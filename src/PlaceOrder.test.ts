import DistanceApiInMemory from './DistanceApiInMemory';
import PlaceOrder from './PlaceOrder';
import PlaceOrderInput from './PlaceOrderInput';

test('Deve fazer um pedido', function () {
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
    const placeOrder = new PlaceOrder(new DistanceApiInMemory());
    const output = placeOrder.execute(input);
    expect(output.total).toBe(6122);
});

test('Não deve fazer um pedido com cupom expirado', function () {
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
    const placeOrder = new PlaceOrder(new DistanceApiInMemory());
    expect(() => placeOrder.execute(input)).toThrow(new Error('Coupon expired'));
});

test('Deve fazer um pedido com frete', function () {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        items: [
            { id: '1', quantity: 2},
            { id: '2', quantity: 1},
            { id: '3', quantity: 3}
        ],
        destiny: '88815333'
    });
    const placeOrder = new PlaceOrder(new DistanceApiInMemory());
    const output = placeOrder.execute(input);
    expect(output.freigth).toBe(450);
});