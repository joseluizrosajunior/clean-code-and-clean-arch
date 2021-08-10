import ProductRepositoryInMemory from "./ProductRepositoryInMemory";

test('Deve obter uma lista de produtos', () => {
    const repository = new ProductRepositoryInMemory();
    const products = repository.getAllProducts();
    expect(products.length).toBeGreaterThan(0);
});

test('Deve obter um produto pelo id', () => {
    const repository = new ProductRepositoryInMemory();
    const product = repository.getProductById('1');
    expect(product.id).toBe('1');
});