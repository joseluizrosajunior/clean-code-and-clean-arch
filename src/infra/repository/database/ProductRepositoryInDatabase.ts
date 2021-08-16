import Product from "../../../domain/entity/Product";
import ProductRepository from "../../../domain/repository/ProductRepository";
import Database from "../../database/Database";

export default class ProductRepositoryInDatabase implements ProductRepository {
    database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    async getAll(): Promise<Product[]> {
        const productsData =  await this.database.many("select * from ccca.products", []);
        return productsData.map((productData) => new Product(
            productData.id,
            productData.description,
            productData.price,
            productData.width,
            productData.heigth,
            productData.length,
            productData.weight
        ));
    }
    async getById(id: string): Promise<Product|undefined> {
        const productData = await this.database.one("select * from ccca.products where id = $1", [id]);
        return new Product(
            productData.id,
            productData.description,
            productData.price,
            productData.width,
            productData.heigth,
            productData.length,
            productData.weight
        );
    }

}