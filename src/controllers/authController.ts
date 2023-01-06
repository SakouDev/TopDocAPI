import { authHandler } from '../handler/injection/auth';

const { Router } = require('express')

export const authController = Router();

/**
 * @swagger
 * tags:
 *      name: Auth
 *      description: Manage auth
 */

/**
 * @openapi
 * /api/auth:
 *  post:
 *      tags: [Auth]
 *      description: Login
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "mail" : "Menfou@Aled.com", "password" : "12344" }
 *      responses:
 *        200:
 *          description: Logged.
 *        400:  
 *          description: Donnée invalide
 *        401:
 *          description: Donnée invalide
 *        500:
 *          description: Erreur serveur
 */
authController.post('/', authHandler.login);