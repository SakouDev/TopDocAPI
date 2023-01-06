import { IRepositoryMail, IRepositoryToken } from './../repository/core/repository.interface';
import { Auth, TokenAuth } from "../../types/auth";
import { Token } from "../models/token";
import { IServiceAuth } from "./core/service.interface";
import { User } from '../models/user';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User_Token } from '../models/user_token';

export class AuthService implements IServiceAuth<Auth, Token> {

    private tokenRepository: IRepositoryToken<Partial<Token>>
    private userRepository: IRepositoryMail<User>

    constructor(tokenRepository: IRepositoryToken<Partial<Token>>, userRepository: IRepositoryMail<User>) {
        this.tokenRepository = tokenRepository
        this.userRepository = userRepository
    }

    async login(logs: Auth): Promise<any> {

        try {
            
            const user = await this.userRepository.findByMail(logs.mail)
            if (!user) return

            if (!await bcrypt.compare(logs.password, user.password) ) {
                throw new Error("Password incorrect")
            }     

            const RefreshToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
                expiresIn: 86400
            })
            const AccessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
                expiresIn: 10
            })

            User_Token.findAll( {where : {UserId : user.id},order: [['updatedAt', 'DESC']]} )
            .then((ValidToken: any) => {
                if ( ValidToken.length < 3 ) {
                    Token.create({
                        userId: user.id,
                        refreshToken: RefreshToken
                    }).then( async (token:any) => {
                        await token.addUser(user, { through: { User_Token } })
                    })
                    console.log("Token Created")
                } else {
                    Token.destroy({
                        where: {
                            id : ValidToken[2].TokenId
                        }
                    })
                    Token.create({
                        userId: user.id,
                        refreshToken: RefreshToken
                    }).then( async (token:any) => {
                        await token.addUser(user, { through: { User_Token } })
                    })
                }
                // return res.status(200).json({ "accessToken": AccessToken, "refreshToken": RefreshToken })
            })
            return { AccessToken, RefreshToken }
            
    

        } catch (error) {
            
        }

        

       

    }
    loginAdmin(t: Auth): Promise<Auth> {
        throw new Error("Method not implemented.");
    }
    logout(t: Auth): Promise<Auth> {
        throw new Error("Method not implemented.");
    }
    verifToken(t: Token): Promise<Token> {
        throw new Error("Method not implemented.");
    }
}