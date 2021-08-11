import DistanceApiInMemory from '../../src/infra/gateway/memory/DistanceApiInMemory';
import FreigthCalculator from '../../src/application/FreigthCalculator';
import Product from '../../src/domain/entity/Product';

test('Deve calcular o valor do frete com base na distância, dimensões e peso', () => {
    const product = new Product('1', 'Guitarra', 1500, 100, 30, 10, 3);
    const distance = new DistanceApiInMemory();
    const freigthCalculator = new FreigthCalculator(product, distance.getDistance('88888888', '88888999'));
    const freigth = freigthCalculator.execute();
    expect(freigth).toBe(30);
});

test('Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado', () => {
    const product = new Product('2', 'Camera', 450, 20, 15, 10, 1);
    const distance = new DistanceApiInMemory();
    const freigthCalculator = new FreigthCalculator(product, distance.getDistance('88888888', '88888999'));
    const freigth = freigthCalculator.execute();
    expect(freigth).toBe(10);
});