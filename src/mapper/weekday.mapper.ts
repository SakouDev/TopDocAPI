import { WeekdayDTO } from "../../types/DTO/hours.dto";
import { Weekday } from "../models/weekday";

export class WeekdayMapper {

    static MapToDTO(weekday: Weekday | null): WeekdayDTO {

        if (weekday === null) return null as any
        const DTO: WeekdayDTO = {
            today: weekday.today,
            startHour: weekday.startHour,
            endHour: weekday.endHour,
            duration: weekday.duration
        }
        console.log("DTO", DTO)
        return DTO
    }

}