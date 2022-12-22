import { Hours } from "../models/hours";
import { HoursDTO } from "../DTO/hours.dto";
import { HoursMapper } from "../mapper/hours.mapper";
import { IRepository } from "./core/repository.interface";

export class HoursRepository implements IRepository<HoursDTO> {
    async findById(id: number): Promise<HoursDTO | null> {
        return Hours.findByPk(id).then((data: Hours | null) => {
            return HoursMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<HoursDTO>> {
        return Hours.findAll().then((data: Array<Hours>) => {
            return data.map((hours: Hours) => {
                return HoursMapper.MapToDTO(hours)
            })
        })
    }
    async create(body: Partial<Hours>): Promise<HoursDTO> {
        return Hours.create(body).then((data: Hours) => {
            return HoursMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Hours.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Hours, id: number): Promise<boolean | number> {
        return Hours.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}