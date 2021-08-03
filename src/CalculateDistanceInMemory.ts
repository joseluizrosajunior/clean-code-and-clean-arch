import CalculateDistanceInterface from "./CalculateDistanceInterface";

export default class CalculateDistanceInMemory implements CalculateDistanceInterface {
    getDistance(cepOrigin: string, cepDestiny: string): number {
        if (!cepOrigin) throw new Error("CEP origin is required");
        if (!cepDestiny) throw new Error("CEP destiny is required");
        return 1000;
    }
}