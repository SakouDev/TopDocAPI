import { BannedDTO } from "../DTO/banned.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Banned } from "../models/banned"

export class BannedService {

    private bannedRepository: IRepository<BannedDTO>

    constructor(bannedRepository: IRepository<BannedDTO>) {
        this.bannedRepository = bannedRepository
    }

    async BannedFindAll(): Promise<Array<BannedDTO> | null> {
        return this.bannedRepository.findAll().then((data) => {
            return data
        })
    }

    async BannedFindById(id: number): Promise<BannedDTO | null> {
        return this.bannedRepository.findById(id).then((data) => {
            return data
        })
    }

    async BannedCreate(banneds: Banned): Promise<BannedDTO | null> {
        return this.bannedRepository.create(banneds).then((data) => {
            return data
        })
    }

    async BannedDelete(id: number): Promise<boolean | number> {
        return this.bannedRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async BannedUpdate(banned: Banned, id: number): Promise<boolean | number> {
        return this.bannedRepository.update(banned, id).then((data) => {
            return data
        })
    }

}