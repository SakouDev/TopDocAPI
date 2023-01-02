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
        return this.locationRepository.findAll().then((data) => {
            return data
        })
    }

    async findById(id: number): Promise<LocationDTO | null> {
        return this.locationRepository.findById(id).then((data) => {
            return data
        })
    }

    async create(location: Location): Promise<LocationDTO> {
        return this.locationRepository.create(location).then((data) => {
            return data
        })
    }

    async delete(id: number): Promise<boolean | number> {
        return this.locationRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async update(location: Location, id: number): Promise<boolean | number> {
        return this.locationRepository.update(location, id).then((data) => {
            return data
        })
    }

}