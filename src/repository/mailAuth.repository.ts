import { User } from './../models/user';
import { IRepositoryMail } from "./core/repository.interface";

export class MailRepository implements IRepositoryMail<User> {
    
    async findByMail(mail: string): Promise<User | null> {
        return User.findOne({ where: { mail : mail } }).then((data: User | null) => {
            return data
        })
    }
}