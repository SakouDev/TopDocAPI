import { TimeslotDTO } from "../../types/DTO/timeslot.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Timeslot } from "../models/timeslot"
import { IService } from "./core/service.interface";

export class TimeslotService implements IService<TimeslotDTO> {

    private timeslotRepository: IRepository<TimeslotDTO>

    constructor(timeslotRepository: IRepository<TimeslotDTO>) {
        this.timeslotRepository = timeslotRepository
    }

    async findAll(): Promise<Array<TimeslotDTO> | null> {
        return this.timeslotRepository.findAll()
    }

    async findById(id: number): Promise<TimeslotDTO | null> {
        return this.timeslotRepository.findById(id)
    }

    async create(timeslot: Timeslot): Promise<TimeslotDTO> {
        return this.timeslotRepository.create(timeslot)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.timeslotRepository.delete(id)
    }

    async update(timeslot: Timeslot, id: number): Promise<boolean | number> {
        return this.timeslotRepository.update(timeslot, id)
    }

}