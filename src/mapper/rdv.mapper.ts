import { RdvDTO } from "../../types/DTO/rdv.dto";
import { Rdv } from "../models/rdv";

export class RdvMapper {

    static MapToDTO(rdv: Rdv | null): RdvDTO {

        if (rdv === null) return null as any
        const DTO: RdvDTO = {
            rdvDate: rdv.rdvDate,
            rdvDuration: rdv.rdvDuration
        }
        console.log("DTO", DTO)
        return DTO
    }

}