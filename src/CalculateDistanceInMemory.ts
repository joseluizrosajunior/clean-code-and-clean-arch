import CalculateDistance from "./CalculateDistanceInterface";

export default class CalculateDistanceInMemory implements CalculateDistance {
    getDistance(): number {
        return 1000;
    };
}