import DistanceApi from './DistanceApi';
export default class DistanceApiInMemory implements DistanceApi {
    getDistance(cepOrigin: string,cepDistiny: string): number {
        return 1000;
    }

}