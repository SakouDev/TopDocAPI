import { TimeslotDTO } from "../DTO/timeslot.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Timeslot } from "../models/timeslot"

export class TimeslotService {

    private timeslotRepository: IRepository<TimeslotDTO>

    constructor(timeslotRepository: IRepository<TimeslotDTO>) {
        this.timeslotRepository = timeslotRepository
    }

    async TimeslotFindAll(): Promise<Array<TimeslotDTO> | null> {
        return this.timeslotRepository.findAll().then((data) => {
            return data
        })
    }

    async TimeslotFindById(id: number): Promise<TimeslotDTO | null> {
        return this.timeslotRepository.findById(id).then((data) => {
            return data
        })
    }

    async TimeslotCreate(timeslots: Timeslot): Promise<TimeslotDTO | null> {
        return this.timeslotRepository.create(timeslots).then((data) => {
            return data
        })
    }

    async TimeslotDelete(id: number): Promise<boolean | number> {
        return this.timeslotRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async TimeslotUpdate(timeslot: Timeslot, id: number): Promise<boolean | number> {
        return this.timeslotRepository.update(timeslot, id).then((data) => {
            return data
        })
    }

}