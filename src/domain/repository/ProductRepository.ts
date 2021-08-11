import Product from "../entity/Product";

export default interface ProductRepository {
    getAllProducts(): Product[];
    getProductById(id: string): Product;
}