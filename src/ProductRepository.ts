import Product from "./Product";

export default interface ProductRepository {
    getAllProducts(): Product[];
    getProductById(id: string): Product;
}