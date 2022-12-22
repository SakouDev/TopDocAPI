import { Request, Response } from "express";
import { RdvService } from "../../services/rdv.service";
import { RdvRepository } from "../../repository/rdv.repository";
const bcrypt = require("bcrypt");


const rdvService = new RdvService(new RdvRepository)


const getAllRdv = async (req: Request, res: Response) => {
    try {
        const result = await rdvService.RdvFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getRdvById = async (req: Request, res: Response) => {
    try {
        const result = await rdvService.RdvFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createRdv = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await rdvService.RdvCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteRdv = async (req: Request, res: Response) => {
    try {
        const result = await rdvService.RdvDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateRdv = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await rdvService.RdvUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerRdv = {
    getAllRdv,
    getRdvById,
    createRdv,
    updateRdv,
    deleteRdv
}