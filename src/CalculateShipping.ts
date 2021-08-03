import Product from './Product';
import DistanceAbstract from './DistanceAbstract';

export default class CalculateShipping {
    product: Product;
    distance: DistanceAbstract;

    constructor(product: Product, distance: DistanceAbstract) {
        this.product = product;
        this.distance = distance;
    }

    MINIMUM_SHIPPING = 10;

    execute() {
        const totalShipping = this.distance.getDistance() * this.product.getVolume() * (this.product.getDensity() / 100);
        return totalShipping > this.MINIMUM_SHIPPING ? totalShipping : this.MINIMUM_SHIPPING;
    }
}