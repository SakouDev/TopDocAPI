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
            const startUnformattedData = data.Weekday[i].startHour.split(':')
            const startHours = parseInt(startUnformattedData[0])
            const startMinutes = parseInt(startUnformattedData[1])

            const endUnformattedData = data.Weekday[i].endHour.split(':')
            const endHours = parseInt(endUnformattedData[0])
            const endMinutes = parseInt(endUnformattedData[1])

            const start = dayjs().hour(startHours).minute(startMinutes)

            const minutesTotales = (((endHours * 60) + endMinutes) - ((startHours * 60) + startMinutes))
            const creneauxDuration = data.Planning.rdvDuration
            const nbCreneaux = minutesTotales / creneauxDuration

            const CreneauxList = []
            const PausesList = []
            const heureDebutPause = data.Weekday[i].breakStartHour
            const heureFinPause = data.Weekday[i].breakEndHour
            const date = data.Weekday[i].date

            for (let i = 0; i < nbCreneaux; i++) {
                const startHour = start.add(i * creneauxDuration, 'minute').format('HH:mm')
                const endHour = start.add((i + 1) * creneauxDuration, 'minute').format('HH:mm')
                const newCreneau = { date: date, startHour: startHour, endHour: endHour, taken: false }

                if (heureDebutPause <= startHour && heureFinPause > startHour) {
                    PausesList.push(newCreneau)
                }
                else {
                    for (let i = 0; i < data.Rdv.length; i++) {
                        if (data.Rdv[i].startHour <= newCreneau.startHour && 
                            data.Rdv[i].endHour >= newCreneau.endHour &&
                            data.Rdv[i].date.toDateString() == newCreneau.date.toDateString() ) {
                            newCreneau.taken = true
                            console.log('Rdv prévu:', newCreneau)
                        }
                    }
                    CreneauxList.push(newCreneau)
                }
            }
            const selectedDate = { jour: date, creneaux: CreneauxList, pauses: PausesList }
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