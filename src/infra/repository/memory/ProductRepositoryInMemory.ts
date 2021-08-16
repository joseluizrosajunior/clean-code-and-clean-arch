import Product from "../../../domain/entity/Product";
import ProductRepository from "../../../domain/repository/ProductRepository";

export default class ProductRepositoryInMemory implements ProductRepository {
    private products = [
        new Product('1', 'Guitarra', 1000, 20, 100, 30, 10),
        new Product('2', 'Amplificador', 5000, 50, 50, 50, 22),
        new Product('3', 'Cabo', 30, 10, 10, 10, 1)
    ];

    getAll(): Promise<Product[]> {
        return Promise.resolve(this.products);
    }

    getById(id: string): Promise<Product|undefined> {
        const product =  this.products.find(p => p.id === id);
        if (!product) throw new Error("Product not foud");
        return Promise.resolve(product);
    }
}