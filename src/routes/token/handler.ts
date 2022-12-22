import { Request, Response } from "express";
import { TokenService } from "../../services/tokens.service";
import { TokenRepository } from "../../repository/tokens.repository";
const bcrypt = require("bcrypt");


const tokenService = new TokenService(new TokenRepository)


const getAllTokens = async (req: Request, res: Response) => {
    try {
        const result = await tokenService.TokenFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getTokenById = async (req: Request, res: Response) => {
    try {
        const result = await tokenService.TokenFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createToken = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await tokenService.TokenCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteToken = async (req: Request, res: Response) => {
    try {
        const result = await tokenService.TokenDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateToken = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await tokenService.TokenUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerTokens = {
    getAllTokens,
    getTokenById,
    createToken,
    updateToken,
    deleteToken
}