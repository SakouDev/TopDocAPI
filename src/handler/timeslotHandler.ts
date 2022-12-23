import { Request, Response } from "express";
import { TimeslotService } from "../services/timeslot.service";
import { TimeslotRepository } from "../repository/timeslot.repository";
const bcrypt = require("bcrypt");

const timeslotService = new TimeslotService(new TimeslotRepository)

const getAllTimeslot = async (req: Request, res: Response) => {
    try {
        const result = await timeslotService.TimeslotFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getTimeslotById = async (req: Request, res: Response) => {
    try {
        const result = await timeslotService.TimeslotFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createTimeslot = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await timeslotService.TimeslotCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteTimeslot = async (req: Request, res: Response) => {
    try {
        const result = await timeslotService.TimeslotDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateTimeslot = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await timeslotService.TimeslotUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerTimeslot = {
    getAllTimeslot,
    getTimeslotById,
    createTimeslot,
    updateTimeslot,
    deleteTimeslot
}