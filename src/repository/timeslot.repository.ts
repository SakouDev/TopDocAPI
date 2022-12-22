import { Timeslot } from "../models/timeslot";
import { TimeslotDTO } from "../DTO/timeslot.dto";
import { TimeslotMapper } from "../mapper/timeslot.mapper";
import { IRepository } from "./core/repository.interface";

export class TimeslotRepository implements IRepository<TimeslotDTO> {
    async findById(id: number): Promise<TimeslotDTO | null> {
        return Timeslot.findByPk(id).then((data: Timeslot | null) => {
            return TimeslotMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<Array<TimeslotDTO>> {
        return Timeslot.findAll().then((data: Array<Timeslot>) => {
            return data.map((timeslot: Timeslot) => {
                return TimeslotMapper.MapToDTO(timeslot)
            })
        })
    }
    async create(body: Partial<Timeslot>): Promise<TimeslotDTO> {
        return Timeslot.create(body).then((data: Timeslot) => {
            return TimeslotMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean | number> {
        return Timeslot.destroy({ where: { id: id } }).then((data: boolean | number) => {
            return data
        })
    }
    async update(body: Timeslot, id: number): Promise<boolean | number> {
        return Timeslot.update(body, { where: { id: id } }).then((data: Array<(boolean | number)>) => {
            return data[0]
        })
    }

}