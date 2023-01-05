import { IService } from '../services/core/service.interface';
import { Request, Response } from "express";
import { LocationDTO } from '../../types/DTO/location.dto';
import bcrypt from 'bcrypt';


export class LocationHandler {

    private locationService : IService<LocationDTO>

    constructor(locationService: IService<LocationDTO>) {
        this.locationService = locationService;
    }

    getAllLocation = async (req: Request, res: Response) => {
        try {
            const result = await this.locationService.findAll()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    getLocationById = async (req: Request, res: Response) => {
        try {
            const result = await this.locationService.findById(parseInt(req.params.id))
            if (result === null) {
                return res.status(404).send()
            }
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    createLocation = async (req: Request, res: Response) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.locationService.create(req.body)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    deleteLocation = async (req: Request, res: Response) => {
        try {
            const result = await this.locationService.delete(parseInt(req.params.id))
            return res.status(200).json(result ? "Supprimé" : "Non Supprimé");
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    updateLocation = async (req: Request, res: Response) => {
        try {
            if (req.body.password) {
                let hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body = { ...req.body, password: hashedPassword }
            }
            const result = await this.locationService.update(req.body, parseInt(req.params.id))
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}