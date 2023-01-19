import { WeekdayDTO } from "../../types/DTO/hours.dto";
import { Weekday } from "../models/weekday";

export class WeekdayMapper {

    static MapToDTO(weekday: Weekday | null): WeekdayDTO {

        if (weekday === null) return null as any
        const DTO: WeekdayDTO = {
            weekday: weekday.weekday,
            startHour: weekday.startHour,
            endHour: weekday.endHour,
        }
        console.log("DTO", DTO)
        return DTO
    }

}