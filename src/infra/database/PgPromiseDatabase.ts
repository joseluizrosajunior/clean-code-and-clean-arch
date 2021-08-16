import pgp from 'pg-promise';
import Database from "./Database";

export default class PgPromiseDatabase implements Database {
    pgp: any;

    constructor() {
        this.pgp = pgp()("postgres://postgres:123456@localhost:5432/app");
    }

    many(query: string, params: any): any[] {
        return this.pgp.query(query, params)
    }
    one(query: string, params: any) {
        console.log(query);
        
        return this.pgp.oneOrNone(query, params);
    }
}