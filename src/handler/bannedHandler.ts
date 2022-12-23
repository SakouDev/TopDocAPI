import { Request, Response } from "express";
import { BannedService } from "../services/banned.service";
import { BannedRepository } from "../repository/banned.repository";
const bcrypt = require("bcrypt");

const bannedService = new BannedService(new BannedRepository)

const getAllBanned = async (req: Request, res: Response) => {
    try {
        const result = await bannedService.BannedFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getBannedById = async (req: Request, res: Response) => {
    try {
        const result = await bannedService.BannedFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createBanned = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await bannedService.BannedCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteBanned = async (req: Request, res: Response) => {
    try {
        const result = await bannedService.BannedDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateBanned = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await bannedService.BannedUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerBanned = {
    getAllBanned,
    getBannedById,
    createBanned,
    updateBanned,
    deleteBanned
}