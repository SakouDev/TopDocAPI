import { PlanningDTO } from "../DTO/planning.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Planning } from "../models/planning"
import { IService } from "./core/service.interface";

export class PlanningService implements IService<PlanningDTO> {

    private planningRepository: IRepository<PlanningDTO>

    constructor(planningRepository: IRepository<PlanningDTO>) {
        this.planningRepository = planningRepository
    }

    async findAll(): Promise<Array<PlanningDTO> | null> {
        return this.planningRepository.findAll().then((data) => {
            return data
        })
    }

    async findById(id: number): Promise<PlanningDTO | null> {
        return this.planningRepository.findById(id).then((data) => {
            return data
        })
    }

    async create(planning: Planning): Promise<PlanningDTO> {
        return this.planningRepository.create(planning).then((data) => {
            return data
        })
    }

    async delete(id: number): Promise<boolean | number> {
        return this.planningRepository.delete(id).then((data: boolean | number) => {
            return data
        })
    }

    async update(planning: Planning, id: number): Promise<boolean | number> {
        return this.planningRepository.update(planning, id).then((data) => {
            return data
        })
    }

}