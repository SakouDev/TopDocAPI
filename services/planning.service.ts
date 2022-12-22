import { PlanningDTO } from "../DTO/planning.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Planning } from "../models/planning"

export class PlanningService {

    private planningRepository: IRepository<PlanningDTO>

    constructor(planningRepository : IRepository<PlanningDTO>) {
        this.planningRepository = planningRepository
    }

    async PlanningFindAll(): Promise<Array<PlanningDTO> | null>{
        return this.planningRepository.findAll().then((data) => {
            return data
        })
    }

    async PlanningFindById(id : number): Promise<PlanningDTO | null>{
        return this.planningRepository.findById(id).then((data) => {
            return data
        })
    }
    
    async PlanningCreate(plannings : Planning): Promise<PlanningDTO | null>{
        return this.planningRepository.create(plannings).then((data) => {
            return data
        })
    }

    async PlanningDelete(id : number): Promise<boolean | number>{
        return this.planningRepository.delete(id).then((data : boolean | number) => {
            return data
        })
    }

    async PlanningUpdate(planning : Planning, id : number): Promise<boolean | number>{
        return this.planningRepository.update(planning, id).then((data) => {
            return data
        })
    }
    
}