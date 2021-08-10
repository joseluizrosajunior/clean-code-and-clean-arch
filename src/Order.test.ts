import Coupon from './Coupon';
import Order from './Order';
import OrderRepositoryInMemory from './OrderRepositoryInMemory';

test('Não deve criar um pedido com CPF inválido', function () {
    const cpf = '111.111.111-11';
    expect(() => new Order(cpf, new OrderRepositoryInMemory())).toThrow(new Error('Invalid CPF'));
});

test('Deve criar um pedido com 3 itens', function () {
    const cpf = '778.278.412-36';
    const order = new Order(cpf, new OrderRepositoryInMemory());
    order.addItem('1', 1000, 2);
    order.addItem('2', 5000, 1);
    order.addItem('3', 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
});

test('Deve criar um pedido com cupom de desconto', function () {
    const cpf = '778.278.412-36';
    const order = new Order(cpf, new OrderRepositoryInMemory());
    order.addItem('1', 1000, 2);
    order.addItem('2', 5000, 1);
    order.addItem('3', 30, 3);
    order.addCoupon(new Coupon('VALE20', 20, new Date('2500-12-31')));
    const total = order.getTotal();
    expect(total).toBe(5672);
});

test('Não deve aplicar cupom expirado', function () {
    const cpf = '778.278.412-36';
    const order = new Order(cpf, new OrderRepositoryInMemory());
    const couponExpired = new Coupon('EXPIRED', 20, new Date('2000-12-31'));
    expect(() => order.addCoupon(couponExpired)).toThrow(new Error('Coupon expired'));
});
