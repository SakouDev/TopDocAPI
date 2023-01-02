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
        return this.hoursRepository.findAll().then((data) => {
            return data
        })
    }

    async findById(id: number): Promise<HoursDTO | null> {
        return this.hoursRepository.findById(id).then((data) => {
            return data
        })
    }

    async create(hours: Hours): Promise<HoursDTO> {
        return this.hoursRepository.create(hours).then((data) => {
            return data
        })
    }

    async delete(id: number): Promise<boolean | number> {
        return this.hoursRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async update(hours: Hours, id: number): Promise<boolean | number> {
        return this.hoursRepository.update(hours, id).then((data) => {
            return data
        })
    }

}