import { Request, Response } from "express";
import { LocationService } from "../../services/location.service";
import { LocationRepository } from "../../repository/location.repository";
const bcrypt = require("bcrypt");


const locationService = new LocationService(new LocationRepository)


const getAllLocations = async (req: Request, res: Response) => {
    try {
        const result = await locationService.LocationFindAll()
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getLocationById = async (req: Request, res: Response) => {
    try {
        const result = await locationService.LocationFindById(parseInt(req.params.id))
        if (result === null) {
            return res.status(404).send()
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createLocation = async (req: Request, res: Response) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const result = await locationService.LocationCreate(req.body)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteLocation = async (req: Request, res: Response) => {
    try {
        const result = await locationService.LocationDelete(parseInt(req.params.id))
        return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateLocation = async (req: Request, res: Response) => {
    try {
        if (req.body.password) {
            let hashedPassword = await bcrypt.hash(req.body.password, 10);
            req.body = { ...req.body, password: hashedPassword }
        }
        const result = await locationService.LocationUpdate(req.body, parseInt(req.params.id))
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const handlerLocation = {
    getAllLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
}