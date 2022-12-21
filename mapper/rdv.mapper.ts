import { RdvDTO } from "../DTO/rdv.dto";
import { Rdv } from "../models/rdv";

export class RdvMapper {

    static MapToDTO( rdv : Rdv | null): RdvDTO {
        
        if( rdv === null ) return null as any
        const DTO : RdvDTO = {
            rdv_date : rdv.rdv_date,
            rdv_duration : rdv.rdv_duration
        }
        console.log("DTO",DTO)
        return DTO
    }

}