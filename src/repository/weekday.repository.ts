import { Weekday } from "../models/weekday";
import { WeekdayDTO } from "../../types/DTO/weekday.dto";
import { WeekdayMapper } from "../mapper/weekday.mapper";
import { IRepository } from "./core/repository.interface";

export class WeekdayRepository implements IRepository<WeekdayDTO> {
    async findById(id: number): Promise<WeekdayDTO | null> {
        return Weekday.findByPk(id).then((data: Weekday | null) => {
            return WeekdayMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<WeekdayDTO>> {
        return Weekday.findAll().then((data: Array<Weekday>) => {
            return data.map((weekday: Weekday) => {
                return WeekdayMapper.MapToDTO(weekday)
            })
        })
    }
    async create(body: Partial<Weekday>): Promise<WeekdayDTO> {
        return Weekday.create(body).then((data: Weekday) => {
            return WeekdayMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Weekday.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Weekday, id: number): Promise<boolean | number> {
        return Weekday.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}