import { User_Token } from './../models/user_token';
import { User } from "../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Token } from "../models/token";
import { Where } from 'sequelize/types/utils';
const { Router } = require('express')


// import { authHandler } from '../handler/injection/auth'

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
 *         default: { "mail" : "Menfou@gmail.com", "password" : "12344" }
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
authController.post('/', async ( req: any, res: any ) => {
    User.findAll().then(async (db: any) => {
        const data = db.find((element: any) => {
            return element.mail == req.body.mail
        })

        if (data == null ) {
            return res.status(400).json({
                message: 'Mail invalide'
            })
        }

        if (await bcrypt.compare(req.body.password, data.password) ) {
            const RefreshToken = jwt.sign({ id: data.id }, process.env.SECRET_KEY!, {
                expiresIn: 86400
            })
            const AccessToken = jwt.sign({ id: data.id }, process.env.SECRET_KEY!, {
                expiresIn: 10
            })

            User_Token.findAll( {where : {UserId : data.id},order: [['updatedAt', 'DESC']]
        } ).then((ValidToken: any) => {
                if ( ValidToken.lenght < 3 ) {
                    Token.create({
                        refreshToken: RefreshToken
                    })
                } else {
                    Token.update({
                        refreshToken: RefreshToken
                    }, {
                        where: {
                            updatedAt : ValidToken[0].updatedAt
                        }
                    })
                    return res.status(200).json({ "accessToken": AccessToken, "refreshToken": RefreshToken })
                }
            })

        } else {
            return res.status(401).json({
                message: 'Données invalide'
            })
        }

    }).catch((err: any) => {
        return res.status(500).json({
            message: err.message || 'Erreur serveur'
        })
    })
})