import { TokenDTO } from "../DTO/token.dto";
import { Token } from "../models/token";

export class TokenMapper {

    static MapToDTO(token: Token | null): TokenDTO {

        if (token === null) return null as any
        const DTO: TokenDTO = {
            refreshToken: token.refreshToken
        }
        console.log("DTO", DTO)
        return DTO
    }

}