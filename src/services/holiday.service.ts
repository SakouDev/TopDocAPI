import { HolidayDTO } from "../DTO/holiday.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Holiday } from "../models/holiday"
import { IService } from "./core/service.interface";

export class HolidayService implements IService<HolidayDTO> {

    private holidayRepository: IRepository<HolidayDTO>

    constructor(holidayRepository: IRepository<HolidayDTO>) {
        this.holidayRepository = holidayRepository
    }

    async findAll(): Promise<Array<HolidayDTO> | null> {
        return this.holidayRepository.findAll().then((data) => {
            return data
        })
    }

    async findById(id: number): Promise<HolidayDTO | null> {
        return this.holidayRepository.findById(id).then((data) => {
            return data
        })
    }

    async create(holiday: Holiday): Promise<HolidayDTO> {
        return this.holidayRepository.create(holiday).then((data) => {
            return data
        })
    }

    async delete(id: number): Promise<boolean | number> {
        return this.holidayRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async update(holiday: Holiday, id: number): Promise<boolean | number> {
        return this.holidayRepository.update(holiday, id).then((data) => {
            return data
        })
    }

}