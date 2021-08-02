export default class Coupon {
    code: string;
    percentage: number;
    expireAt: Date;

    constructor (code: string, percentage: number, expireAt: Date) {
        this.code = code;
        this.percentage = percentage;
        this.expireAt = expireAt;
    }

    isExpired() {
        return new Date() > this.expireAt;
    }
}