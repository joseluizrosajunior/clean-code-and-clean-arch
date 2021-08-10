export default class PlaceOrderInput {
    cpf: string;
    items: any;
    coupon?: string;
    destiny: string;
    constructor({ cpf, items, coupon, destiny }: { cpf: string, items: any, coupon?: string, destiny: string }){
        this.cpf = cpf;
        this.items = items;
        this.coupon = coupon;
        this.destiny = destiny;
    }
}