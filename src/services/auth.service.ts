import { IRepositoryMail, IRepositoryToken } from './../repository/core/repository.interface';
import { Auth, TokenAuth } from "../../types/auth";
import { Token } from "../models/token";
import { IServiceAuth } from "./core/service.interface";
import { User } from '../models/user';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import { User_Token } from '../models/user_token';

export class AuthService implements IServiceAuth<Auth, Token> {

    private tokenRepository: IRepositoryToken<Partial<Token>>
    private mailRepository: IRepositoryMail<User>

    constructor(tokenRepository: IRepositoryToken<Partial<Token>>, mailRepository: IRepositoryMail<User>) {
        this.tokenRepository = tokenRepository
        this.mailRepository = mailRepository
    }

    async login(logs: Auth): Promise<any> {

        try {
            const user = await this.mailRepository.findByMail(logs.mail)
            if (!user) {
                return
            }

            if (!await bcrypt.compare(logs.password, user.password) ) {
                throw new Error("Password incorrect")
            }     

            const RefreshToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
                expiresIn: 86400
            })
            const AccessToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
                expiresIn: 10
            })

            
            const userPropre = user.get({ plain: true })
            // console.log(user.get({ plain: true }).Tokens.length)
            const ValidToken = user.get({ plain: true }).Tokens
            console.log(user.id)
            if ( ValidToken.length < 3 ) {
                Token.create({
                    userId: user.id,
                    refreshToken: RefreshToken
                })
                console.log("Token Created")
            } else {
                Token.destroy({
                    where: {
                        id : ValidToken[0].id
                    }
                })
                Token.create({
                    userId: user.id,
                    refreshToken: RefreshToken
                })
            } 
            return { AccessToken, RefreshToken }
        } catch (error:any) {
            throw new Error(error.message)
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