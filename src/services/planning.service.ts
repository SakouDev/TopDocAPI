import { PlanningDTO } from "../../types/DTO/planning.dto";
import { IRepository } from "../repository/core/repository.interface";
import { Planning } from "../models/planning"
import { IService } from "./core/service.interface";
import dayjs from "dayjs";

export class PlanningService implements IService<PlanningDTO> {

    private planningRepository: IRepository<PlanningDTO>

    constructor(planningRepository: IRepository<PlanningDTO>) {
        this.planningRepository = planningRepository
    }

    async findAll(): Promise<Array<PlanningDTO> | null> {
        return this.planningRepository.findAll()
    }

    async findById(id: number): Promise<PlanningDTO | null> {
        const data: any = await this.planningRepository.findById(id)

        for (let i = 0; i < data.Weekday.length; i++) {
            let startUnformattedData = data.Weekday[i].startHour.split(':')
            let startHours = parseInt(startUnformattedData[0])
            let startMinutes = parseInt(startUnformattedData[1])

            let endUnformattedData = data.Weekday[i].endHour.split(':')
            let endHours = parseInt(endUnformattedData[0])
            let endMinutes = parseInt(endUnformattedData[1])

            let start = dayjs().hour(startHours).minute(startMinutes)

            const minutesTotales = (((endHours * 60) + endMinutes) - ((startHours * 60) + startMinutes))
            const creneauxDuration = data.Planning.rdvDuration
            const nbCreneaux = minutesTotales / creneauxDuration

            const CreneauxList = []

            for (let i = 0; i < nbCreneaux; i++) {
                const startHour = start.add(i * creneauxDuration, 'minute').format('HH:mm')
                const endHour = start.add((i + 1) * creneauxDuration, 'minute').format('HH:mm')
                const newCreneau = { startHour: startHour, endHour: endHour }

                CreneauxList.push(newCreneau)
            }
            const selectedDate = { jour: data.Weekday[i].weekday, creneaux: CreneauxList }
            console.log(selectedDate)
        }
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