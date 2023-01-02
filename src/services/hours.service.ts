import { HoursDTO } from "../DTO/hours.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Hours } from "../models/hours"
import { IService } from "./core/service.interface";

export class HoursService implements IService<HoursDTO> {

    private hoursRepository: IRepository<HoursDTO>

    constructor(hoursRepository: IRepository<HoursDTO>) {
        this.hoursRepository = hoursRepository
    }

    async findAll(): Promise<Array<HoursDTO> | null> {
        return this.hoursRepository.findAll()
    }

    async findById(id: number): Promise<HoursDTO | null> {
        return this.hoursRepository.findById(id)
    }

    async create(hours: Hours): Promise<HoursDTO> {
        return this.hoursRepository.create(hours)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.hoursRepository.delete(id)
    }

    async update(hours: Hours, id: number): Promise<boolean | number> {
        return this.hoursRepository.update(hours, id)
    }

}