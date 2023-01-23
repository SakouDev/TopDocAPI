import { WeekdayDTO } from "../../types/DTO/weekday.dto";
import { Weekday } from "../models/weekday";

export class WeekdayMapper {

    static MapToDTO(weekday: Weekday | null): WeekdayDTO {

        if (weekday === null) return null as any
        const DTO: WeekdayDTO = {
            weekday: weekday.weekday,
            startHour: weekday.startHour,
            endHour: weekday.endHour,
            breakStartHour: weekday.breakStartHour,
            breakEndHour: weekday.breakEndHour,
        }
        console.log("DTO", DTO)
        return DTO
    }

}