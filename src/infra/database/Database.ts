export default interface Database {
    many(query: string, params: any): any[];
    one(query: string, params: any): any;
}