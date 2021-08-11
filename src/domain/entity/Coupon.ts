export default class Coupon {
    code: string;
    percentage: number;
    expireDate: Date;

    constructor (code: string, percentage: number, expireDate: Date) {
        this.code = code;
        this.percentage = percentage;
        this.expireDate = expireDate;
    }

    isExpired() {
        const totay = new Date();
        return this.expireDate.getTime() < totay.getTime();
    }
}