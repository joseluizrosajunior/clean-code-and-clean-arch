import CalculateDistanceInterface from "./CalculateDistanceInterface";
import Product from "./Product";

export default class CalculateShipping {
    cepOrigin: string;
    cepDestiny: string;
    product: Product;
    calculateDistance: CalculateDistanceInterface;

    constructor(cepOrigin: string, cepDestiny: string, product: Product, calculateDistance: CalculateDistanceInterface) {
        this.cepOrigin = cepOrigin;
        this.cepDestiny = cepDestiny;
        this.product = product;
        this.calculateDistance = calculateDistance;
    }

    MINIMUM_SHIPPING = 10;

    execute() {
        const totalShipping = this.calculateDistance.getDistance(this.cepOrigin, this.cepDestiny) * this.product.getVolume() * (this.product.getDensity() / 100);
        return totalShipping > this.MINIMUM_SHIPPING ? totalShipping : this.MINIMUM_SHIPPING;
    }
}