import { PlanningDTO } from "../../types/DTO/planning.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Planning } from "../models/planning"
import { IService } from "./core/service.interface";

export class PlanningService implements IService<PlanningDTO> {

    private planningRepository: IRepository<PlanningDTO>

    constructor(planningRepository: IRepository<PlanningDTO>) {
        this.planningRepository = planningRepository
    }

    async findAll(): Promise<Array<PlanningDTO> | null> {
        return this.planningRepository.findAll()
    }

    async findById(id: number): Promise<PlanningDTO | null> {
        return this.planningRepository.findById(id)
    }

    async create(planning: Planning): Promise<PlanningDTO> {
        return this.planningRepository.create(planning)
    }

    async delete(id: number): Promise<boolean | number> {
        return this.planningRepository.delete(id)
    }

    async update(planning: Planning, id: number): Promise<boolean | number> {
        return this.planningRepository.update(planning, id)
    }

}