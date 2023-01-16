import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpException';

export function errorHandler(
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
    ) {
    const status = error.status || 500;
    const message = error.message || 'Une erreur est survenue, veuillez réessayer plus tard.';
    res.status(status).json({
        status,
        message,
    });
}