import { BannedDTO } from "../../types/DTO/banned.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Banned } from "../models/banned"
import { IService } from "./core/service.interface";

export class BannedService implements IService<BannedDTO> {

    private bannedRepository: IRepository<BannedDTO>

    constructor(bannedRepository: IRepository<BannedDTO>) {
        this.bannedRepository = bannedRepository
    }

    async findAll(): Promise<Array<BannedDTO> | null> {
        return this.bannedRepository.findAll()
    }

    async findById(id: number): Promise<BannedDTO | null> {
        return this.bannedRepository.findById(id)
    }

    async create(banned: Banned): Promise<BannedDTO> {
        return this.bannedRepository.create(banned)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.bannedRepository.delete(id)
    }

    async update(banned: Banned, id: number): Promise<boolean | number> {
        return this.bannedRepository.update(banned, id)
    }

}