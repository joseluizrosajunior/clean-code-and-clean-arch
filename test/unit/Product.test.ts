import Product from '../../src/domain/entity/Product';

test('Deve calcular o colume de um produto', () => {
    const produto = new Product('1', 'Guitarra', 20, 100, 30, 10, 3);
    expect(produto.getVolume()).toBe(0.03);
});

test('Deve calcular a densidade de um produto', () => {
    const produto = new Product('1', 'Guitarra', 20, 100, 30, 10, 3);
    expect(produto.getDensity()).toBe(100);
});