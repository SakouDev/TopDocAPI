import { PlanningDTO } from "../../types/DTO/planning.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Planning } from "../models/planning"
import { IService } from "./core/service.interface";

export class PlanningTestService implements IService<PlanningDTO> {

    private planningRepository: IRepository<PlanningDTO>

    constructor(planningRepository: IRepository<PlanningDTO>) {
        this.planningRepository = planningRepository
    }

    async findAll(): Promise<Array<PlanningDTO> | null> {
        return this.planningRepository.findAll()
    }

    async findById(id: number): Promise<PlanningDTO | null> {
        const data : any = await this.planningRepository.findById(id)
        
        const minutes = (data.Hours[0].endHour.getTime() - data.Hours[0].startHour.getTime()) / (1000 * 60)
        const nbCreneaux = Math.floor(minutes / data.Hours[0].duration)

        const CreneauxList = []

        for (let i = 0; i < nbCreneaux; i++) {

            const startHour = new Date(data.Hours[0].startHour.getTime() + ((data.Hours[0].duration * (1000 * 60)) * i)).toLocaleTimeString()
            const endHour = new Date(data.Hours[0].startHour.getTime() + ((data.Hours[0].duration * (1000 * 60)) * (i + 1))).toLocaleTimeString()
            
            const newCreneau = {startHour: startHour, endHour: endHour}

            CreneauxList.push(newCreneau)

        }

        const selectedDate = {jour: data.Hours[0].today, creneaux: CreneauxList}

        console.log(selectedDate)

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