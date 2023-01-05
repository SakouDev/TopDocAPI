import { HolidayDTO } from "../../types/DTO/holiday.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Holiday } from "../models/holiday"
import { IService } from "./core/service.interface";

export class HolidayService implements IService<HolidayDTO> {

    private holidayRepository: IRepository<HolidayDTO>

    constructor(holidayRepository: IRepository<HolidayDTO>) {
        this.holidayRepository = holidayRepository
    }

    async findAll(): Promise<Array<HolidayDTO> | null> {
        return this.holidayRepository.findAll()
    }

    async findById(id: number): Promise<HolidayDTO | null> {
        return this.holidayRepository.findById(id)
    }

    async create(holiday: Holiday): Promise<HolidayDTO> {
        return this.holidayRepository.create(holiday)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.holidayRepository.delete(id)
    }

    async update(holiday: Holiday, id: number): Promise<boolean | number> {
        return this.holidayRepository.update(holiday, id)
    }

}