export default abstract class DistanceAbstract {
    cepOrigin: string;
    cepDestiny: string;
    constructor(cepOrigin: string, cepDestiny: string) {
        if (!cepOrigin) throw new Error('CEP origin is required');
        if (!cepDestiny) throw new Error('CEP destiny is required');
        this.cepOrigin = cepOrigin;
        this.cepDestiny = cepDestiny;
    }
    abstract getDistance(): number;
}