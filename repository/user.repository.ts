import { User } from "../database/connect";
import { UserDTO } from "../DTO/user.dto";
import { UserMapper } from "../mapper/user.mapper";
import { UserType } from "../types/user";
import { IRepository } from "./core/repository.interface";

export class UserRepository implements IRepository<UserDTO> {
    async findById(id: number): Promise<UserDTO | null> {
        return User.findByPk(id).then((data : UserType) => {
            return UserMapper.MapToDTO(data)
        })
    }
    async findAll(): Promise<UserDTO[]> {
        return User.findAll().then((data : Array<UserType>) => {
            return data.map((user : UserType) => {
                return UserMapper.MapToDTO(user)
            })
        })
    }
    async create(body: UserType): Promise<UserDTO> {
        return User.create(body).then((data : UserType) => {
                return UserMapper.MapToDTO(data)
        })
    }
    async delete(id: number): Promise<boolean> {
        return User.destroy({where:{id:id}}).then((data : boolean) => {
            return data
    })
    }
    async update(body: UserType, id: number): Promise<boolean> {
        return User.update(body, {where:{id: id}}).then((data : boolean) => {
            return data
    })
         
    }

}