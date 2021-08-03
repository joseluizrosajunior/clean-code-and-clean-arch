import DistanceAbstract from './DistanceAbstract';

export default class DistanceInMemory extends DistanceAbstract {
    getDistance(): number {
        return 1000;
    }

}