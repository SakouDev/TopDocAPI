import { Request, Response } from "express";
import { PlanningService } from "../../services/planning.service";
import { PlanningRepository } from "../../repository/planning.repository";
const bcrypt = require("bcrypt");


const planningService = new PlanningService(new PlanningRepository)


const getAllPlanning = async (req: Request, res: Response) => {
    try {
        const result = await planningService.PlanningFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getPlanningById = async (req: Request, res: Response) => {
    try {
        const result = await planningService.PlanningFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createPlanning = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await planningService.PlanningCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deletePlanning = async (req: Request, res: Response) => {
    try {
        const result = await planningService.PlanningDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updatePlanning = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await planningService.PlanningUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerPlanning = {
    getAllPlanning,
    getPlanningById,
    createPlanning,
    updatePlanning,
    deletePlanning
}