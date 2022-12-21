import { Holiday } from "../models/holiday";
import { HolidayDTO } from "../DTO/holiday.dto";
import { HolidayMapper } from "../mapper/holiday.mapper";
import { IRepository } from "./core/repository.interface";

export class HolidayRepository implements IRepository<HolidayDTO> {
    async findById(id: number): Promise<HolidayDTO | null> {
        return Holiday.findByPk(id).then((data : Holiday | null) => {
            return HolidayMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<HolidayDTO>> {
        return Holiday.findAll().then((data : Array<Holiday>) => {
            return data.map((holiday : Holiday) => {
                return HolidayMapper.MapToDTO(holiday)
            })
        })
    }
    async create(body: Partial<Holiday>): Promise<HolidayDTO> {
        return Holiday.create(body).then((data : Holiday) => {
                return HolidayMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Holiday.destroy({where:{id:id}}).then((data : boolean | number) => {
            return data
        })
    }
    async update(body: Holiday, id: number): Promise<boolean | number> {
        return Holiday.update(body, {where:{id: id}}).then((data : Array<(boolean | number)>) => {
            return data[0]
        })     
    }

}