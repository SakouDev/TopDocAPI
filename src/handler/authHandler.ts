import { IService, IServiceAuth } from '../services/core/service.interface';
import { Request, Response } from "express";
import { Auth } from '../../types/auth';
import bcrypt from 'bcrypt';
import { Token } from '../models/token';


export class AuthHandler {

    private authService : IServiceAuth<Auth, Partial<Token>>

    constructor(authService: IServiceAuth<Auth, Partial<Token>>) {
        this.authService = authService;
    }

    login = async (req: Request, res: Response) => {
        try {
            const { mail, password } = req.body;
            const result = await this.authService.login(req.body);
            if (!result) return res.status(404).json({ message: "User not found" });
            res.status(200).json(result);
        } catch (error:any) {
            res.status(500).json({ message: error.message });
        }
    }

    
}