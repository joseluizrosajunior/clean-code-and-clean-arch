import Product from "./Product";

test("Deve criar um produto", () => {
    const produto = new Product("Guitarra", 20, 100, 30, 10, 3);
    expect(produto.getDensity()).toBe(100);
});