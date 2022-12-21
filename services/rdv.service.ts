import { RdvDTO } from "../DTO/rdv.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Rdv } from "../models/rdv"

export class RdvService {

    private rdvRepository: IRepository<RdvDTO>

    constructor(rdvRepository : IRepository<RdvDTO>) {
        this.rdvRepository = rdvRepository
    }

    async RdvFindAll(): Promise<Array<RdvDTO> | null>{
        return this.rdvRepository.findAll().then((data) => {
            return data
        })
    }

    async RdvFindById(id : number): Promise<RdvDTO | null>{
        return this.rdvRepository.findById(id).then((data) => {
            return data
        })
    }
    
    async RdvCreate(rdvs : Rdv): Promise<RdvDTO | null>{
        return this.rdvRepository.create(rdvs).then((data) => {
            return data
        })
    }

    async RdvDelete(id : number): Promise<boolean | number>{
        return this.rdvRepository.delete(id).then((data : boolean | number) => {
            return data
        })
    }

    async RdvUpdate(rdvs : Rdv, id : number): Promise<boolean | number>{
        return this.rdvRepository.update(rdvs, id).then((data) => {
            return data
        })
    }
    
}