import Product from "../entity/Product";

export default class FreigthCalculator {
    product: Product;
    distance: number;

    constructor(product: Product, distance: number) {
        this.product = product;
        this.distance = distance;
    }

    MINIMUM_FREIGTH = 10;

    execute() {
        const totalFreigth = this.distance * this.product.getVolume() * (this.product.getDensity() / 100);
        return totalFreigth > this.MINIMUM_FREIGTH ? totalFreigth : this.MINIMUM_FREIGTH;
    }
}