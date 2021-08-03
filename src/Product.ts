export default class Product {
    name: string;
    price: number;
    width: number;
    heigth: number;
    depth: number;
    weight: number;

    constructor(name: string, price: number, width: number, height: number, depth: number, weight: number) {
        this.name = name;
        this.price = price;
        this.width = width;
        this.heigth = height;
        this.depth = depth;
        this.weight = weight;
    }

    getVolume() {
        return (this.width / 100) * (this.heigth / 100) * (this.depth / 100);
    }

    getDensity() {
        return this.weight / this.getVolume();
    }
}