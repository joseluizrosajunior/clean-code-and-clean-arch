import ProductRepositoryInMemory from "../../src/infra/repository/memory/ProductRepositoryInMemory";

test('Deve obter uma lista de produtos', async () => {
    const repository = new ProductRepositoryInMemory();
    const products = await repository.getAll();
    expect(products.length).toBeGreaterThan(0);
});

test('Deve obter um produto pelo id', async () => {
    const repository = new ProductRepositoryInMemory();
    const product = await repository.getById('1');
    expect(product?.id).toBe('1');
});