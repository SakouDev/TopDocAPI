import { RdvDTO } from "../../types/DTO/rdv.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Rdv } from "../models/rdv"
import { IService } from "./core/service.interface";

export class RdvService implements IService<RdvDTO> {

    private rdvRepository: IRepository<RdvDTO>

    constructor(rdvRepository: IRepository<RdvDTO>) {
        this.rdvRepository = rdvRepository
    }

    async findAll(): Promise<Array<RdvDTO> | null> {
        return this.rdvRepository.findAll()
    }

    async findById(id: number): Promise<RdvDTO | null> {
        return this.rdvRepository.findById(id)
    }

    async create(rdv: Rdv) {
        return this.rdvRepository.create(rdv)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.rdvRepository.delete(id)
    }

    async update(rdv: Rdv, id: number): Promise<boolean | number> {
        return this.rdvRepository.update(rdv, id)
    }

}