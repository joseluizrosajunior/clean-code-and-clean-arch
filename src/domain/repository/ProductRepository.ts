import Product from "../entity/Product";

export default interface ProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product|undefined>;
}