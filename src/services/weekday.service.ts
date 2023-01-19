import { WeekdayDTO } from "../../types/DTO/hours.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Weekday } from "../models/weekday"
import { IService } from "./core/service.interface";

export class WeekdayService implements IService<WeekdayDTO> {

    private weekdayRepository: IRepository<WeekdayDTO>

    constructor(weekdayRepository: IRepository<WeekdayDTO>) {
        this.weekdayRepository = weekdayRepository
    }

    async findAll(): Promise<Array<WeekdayDTO> | null> {
        return this.weekdayRepository.findAll()
    }

    async findById(id: number): Promise<WeekdayDTO | null> {
        return this.weekdayRepository.findById(id)
    }

    async create(weekday: Weekday): Promise<WeekdayDTO> {
        return this.weekdayRepository.create(weekday)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.weekdayRepository.delete(id)
    }

    async update(weekday: Weekday, id: number): Promise<boolean | number> {
        return this.weekdayRepository.update(weekday, id)
    }

}