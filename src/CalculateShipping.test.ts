import CalculateDistanceInMemory from "./CalculateDistanceInMemory";
import CalculateShipping from "./CalculateShipping";
import Product from "./Product";

test("Deve calcular o valor do frete com base na distância, dimensões e peso", () => {
    const cepOrigin = '88815222';
    const cepDestiny = '88815900';
    const product = new Product("Guitarra", 1500, 100, 30, 10, 3);
    const calculateShipping = new CalculateShipping(cepOrigin, cepDestiny, product, new CalculateDistanceInMemory());
    const shipping = calculateShipping.execute();
    expect(shipping).toBe(30);
});

test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado", () => {
    const cepOrigin = '88815222';
    const cepDestiny = '88815900';
    const product = new Product("Camera", 450, 20, 15, 10, 1);
    const calculateShipping = new CalculateShipping(cepOrigin, cepDestiny, product, new CalculateDistanceInMemory());
    const shipping = calculateShipping.execute();
    expect(shipping).toBe(10);
});