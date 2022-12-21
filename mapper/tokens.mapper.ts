import { TokenDTO } from "../DTO/tokens.dto";
import { Tokens } from "../models/tokens";

export class TokenMapper {

    static MapToDTO( tokens : Tokens | null): TokenDTO {
        
        if( tokens === null ) return null as any
        const DTO : TokenDTO = {
            refreshToken : tokens.refreshToken
        }
        console.log("DTO",DTO)
        return DTO
    }

}