import { LocationDTO } from "../DTO/location.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Location } from "../models/location"
import { IService } from "./core/service.interface";

export class LocationService implements IService<LocationDTO> {

    private locationRepository: IRepository<LocationDTO>

    constructor(locationRepository: IRepository<LocationDTO>) {
        this.locationRepository = locationRepository
    }

    async findAll(): Promise<Array<LocationDTO> | null> {
        return this.locationRepository.findAll()
    }

    async findById(id: number): Promise<LocationDTO | null> {
        return this.locationRepository.findById(id)
    }

    async create(location: Location): Promise<LocationDTO> {
        return this.locationRepository.create(location)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.locationRepository.delete(id)
    }

    async update(location: Location, id: number): Promise<boolean | number> {
        return this.locationRepository.update(location, id)
    }

}