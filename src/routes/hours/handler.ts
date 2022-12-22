import { Request, Response } from "express";
import { HoursService } from "../../services/hours.service";
import { HoursRepository } from "../../repository/hours.repository";
const bcrypt = require("bcrypt");

const hoursService = new HoursService(new HoursRepository)

const getAllHours = async (req: Request, res: Response) => {
    try {
        const result = await hoursService.HoursFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getHoursById = async (req: Request, res: Response) => {
    try {
        const result = await hoursService.HoursFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createHours = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await hoursService.HoursCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteHours = async (req: Request, res: Response) => {
    try {
        const result = await hoursService.HoursDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateHours = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await hoursService.HoursUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerHours = {
    getAllHours,
    getHoursById,
    createHours,
    updateHours,
    deleteHours
}