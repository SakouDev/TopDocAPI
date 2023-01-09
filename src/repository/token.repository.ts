import { TokenMapper } from '../mapper/token.mapper';
import { UserMapper } from '../mapper/user.mapper';
import { Token } from '../models/token';
import { User } from '../models/user';
import { IRepositoryToken } from './core/repository.interface';


export class TokenRepository implements IRepositoryToken<Token, User> {
    findAll(): Promise<Token[] | null> {
        throw new Error('Method not implemented.');
    }

    async create(token: string, user: User): Promise<Token> {
        const ValidToken = user.get({ plain: true }).Tokens

        if ( ValidToken.length < 3 ) {
            
            return Token.create({
                userId: user.id,
                refreshToken: token
            })
        } else {
            Token.destroy({
                where: {
                    id : ValidToken[0].id
                }
            })
            return Token.create({
                userId: user.id,
                refreshToken: token
            })
        } 
    }

    delete(id: number): Promise<number | boolean> {
        throw new Error('Method not implemented.');
    }


}