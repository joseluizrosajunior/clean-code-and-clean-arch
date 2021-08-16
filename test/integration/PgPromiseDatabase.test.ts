import PgPromiseDatabase from "../../src/infra/database/PgPromiseDatabase";

test.skip('Deve conectar no banco de dados e listar itens', async () => {
    const pgPromiseDatabase = new PgPromiseDatabase();
    const products = await pgPromiseDatabase.many('SELECT * FROM ccca.products', []);
    expect(products).toHaveLength(3);
    
});