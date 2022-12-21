import { LocationDTO } from "../DTO/location.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Location } from "../models/location"

export class LocationService {

    private locationRepository: IRepository<LocationDTO>

    constructor(locationRepository : IRepository<LocationDTO>) {
        this.locationRepository = locationRepository
    }

    async LocationFindAll(): Promise<Array<LocationDTO> | null>{
        return this.locationRepository.findAll().then((data) => {
            return data
        })
    }

    async LocationFindById(id : number): Promise<LocationDTO | null>{
        return this.locationRepository.findById(id).then((data) => {
            return data
        })
    }
    
    async LocationCreate(locations : Location): Promise<LocationDTO | null>{
        return this.locationRepository.create(locations).then((data) => {
            return data
        })
    }

    async LocationDelete(id : number): Promise<boolean | number>{
        return this.locationRepository.delete(id).then((data : boolean | number) => {
            return data
        })
    }

    async LocationUpdate(location : Location, id : number): Promise<boolean | number>{
        return this.locationRepository.update(location, id).then((data) => {
            return data
        })
    }
    
}