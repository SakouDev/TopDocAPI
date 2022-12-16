import { Request, Response } from "express";
import { ApiException } from "../../types/exception";
import { UserType } from "../../types/user";
import { ValidationError } from "sequelize";
import { UserService } from "../../services/user.service";
import { UserRepository } from "../../repository/user.repository";
const bcrypt = require("bcrypt");


const userService = new UserService(new UserRepository)


const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.UserFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await userService.UserFindById(parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await userService.UserCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.UserDelete(parseInt(req.params.id))
        return res.status(200).json(result? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateUser = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await userService.UserUpdate(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
};

export const handlerUser = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}