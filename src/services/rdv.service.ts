import { RdvDTO } from "../DTO/rdv.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Rdv } from "../models/rdv"
import { IService } from "./core/service.interface";

export class RdvService implements IService<RdvDTO> {

    private rdvRepository: IRepository<RdvDTO>

    constructor(rdvRepository: IRepository<RdvDTO>) {
        this.rdvRepository = rdvRepository
    }

    async findAll(): Promise<Array<RdvDTO> | null> {
        return this.rdvRepository.findAll().then((data) => {
            return data
        })
    }

    async findById(id: number): Promise<RdvDTO | null> {
        return this.rdvRepository.findById(id).then((data) => {
            return data
        })
    }

    async create(rdv: Rdv): Promise<RdvDTO> {
        return this.rdvRepository.create(rdv).then((data) => {
            return data
        })
    }

    async delete(id: number): Promise<boolean | number> {
        return this.rdvRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async update(rdv: Rdv, id: number): Promise<boolean | number> {
        return this.rdvRepository.update(rdv, id).then((data) => {
            return data
        })
    }

}