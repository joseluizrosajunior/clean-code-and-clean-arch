export default class Product {
    id: string;
    name: string;
    price: number;
    width: number;
    heigth: number;
    length: number;
    weight: number;

    constructor(id: string, name: string, price: number, width: number, height: number, length: number, weight: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.width = width;
        this.heigth = height;
        this.length = length;
        this.weight = weight;
    }

    getVolume() {
        return (this.width / 100) * (this.heigth / 100) * (this.length / 100);
    }

    getDensity() {
        return this.weight / this.getVolume();
    }
}