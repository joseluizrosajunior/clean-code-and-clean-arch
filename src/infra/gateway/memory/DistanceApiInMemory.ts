import DistanceApi from '../../../domain/gateway/DistanceApi';
export default class DistanceApiInMemory implements DistanceApi {
    getDistance(cepOrigin: string,cepDistiny: string): number {
        return 1000;
    }

}