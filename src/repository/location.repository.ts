import { Location } from "../models/location";
import { LocationDTO } from "../DTO/location.dto";
import { LocationMapper } from "../mapper/location.mapper";
import { IRepository } from "./core/repository.interface";

export class LocationRepository implements IRepository<LocationDTO> {
    async findById(id: number): Promise<LocationDTO | null> {
        return Location.findByPk(id).then((data: Location | null) => {
            return LocationMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<LocationDTO>> {
        return Location.findAll().then((data: Array<Location>) => {
            return data.map((location: Location) => {
                return LocationMapper.MapToDTO(location)
            })
        })
    }
    async create(body: Partial<Location>): Promise<LocationDTO> {
        return Location.create(body).then((data: Location) => {
            return LocationMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Location.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Location, id: number): Promise<boolean | number> {
        return Location.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }
}