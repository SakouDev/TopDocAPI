import { HoursDTO } from "../DTO/hours.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Hours } from "../models/hours"

export class HoursService {

    private hoursRepository: IRepository<HoursDTO>

    constructor(hoursRepository: IRepository<HoursDTO>) {
        this.hoursRepository = hoursRepository
    }

    async HoursFindAll(): Promise<Array<HoursDTO> | null> {
        return this.hoursRepository.findAll().then((data) => {
            return data
        })
    }

    async HoursFindById(id: number): Promise<HoursDTO | null> {
        return this.hoursRepository.findById(id).then((data) => {
            return data
        })
    }

    async HoursCreate(hourss: Hours): Promise<HoursDTO | null> {
        return this.hoursRepository.create(hourss).then((data) => {
            return data
        })
    }

    async HoursDelete(id: number): Promise<boolean | number> {
        return this.hoursRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async HoursUpdate(hours: Hours, id: number): Promise<boolean | number> {
        return this.hoursRepository.update(hours, id).then((data) => {
            return data
        })
    }

}