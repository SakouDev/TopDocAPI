import { HolidayDTO } from "../../types/DTO/holiday.dto";
import { Holiday } from "../models/holiday";

export class HolidayMapper {

    static MapToDTO(holiday: Holiday | null): HolidayDTO {

        if (holiday === null) return null as any
        const DTO: HolidayDTO = {
            startDate: holiday.startDate,
            endDate: holiday.endDate
        }
        console.log("DTO", DTO)
        return DTO
    }

}