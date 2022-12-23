import { Request, Response } from "express";
import { ActivityService } from "../services/activity.service";
import { ActivityRepository } from "../repository/activity.repository";
const bcrypt = require("bcrypt");

const activityService = new ActivityService(new ActivityRepository)

const getAllActivity = async (req: Request, res: Response) => {
    try {
        const result = await activityService.ActivityFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getActivityById = async (req: Request, res: Response) => {
    try {
        const result = await activityService.ActivityFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createActivity = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await activityService.ActivityCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteActivity = async (req: Request, res: Response) => {
    try {
        const result = await activityService.ActivityDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateActivity = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await activityService.ActivityUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerActivity = {
    getAllActivity,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity
}