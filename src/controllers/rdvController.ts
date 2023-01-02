const { Router } = require('express')

import { rdvHandler } from '../handler/injection/rdv';

export const rdvController = Router();

/**
 * @swagger
 * tags:
 *      name: Rdv
 *      description: Manage rdv
 */

/**
 * @openapi
 * /api/rdv:
 *   get:
 *      tags: [Rdv]
 *      description: Get the list of all rdv.
 *      responses:
 *        200:
 *          description: Get the list of all rdv.
 */
rdvController.get('/', rdvHandler.getAllRdv)

/**
 * @openapi
 * /api/rdv/{id}:
 *  get:
 *      tags: [Rdv]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get rdv of given id.
 */
rdvController.get('/:id'
    // , authenticateRdv
    , rdvHandler.getRdvById)

/**
 * @openapi
 * /api/rdv:
 *  post:
 *      tags: [Rdv]
 *      description: Add an rdv
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "firstname": "Name1","lastname":"Name2","birthdate": "27/04/1999","mail": "Menfou@Aled.com","genre": "HelicoptereDeCombat", "password" : "12344", "phone" : "3630", "role" : "Admin" }
 *      responses:
 *        200:
 *          description: create a new rdv.
 */
rdvController.post('/', rdvHandler.createRdv)

/**
 * @openapi
 * /api/rdv/{id}:
 *  put:
 *      tags: [Rdv]
 *      description: update an rdv
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "firstname": "Name1","lastname":"Name2","birthdate": "27/04/1999","mail": "Menfou@Aled.com","genre": "HelicoptereDeCombat", "password" : "12344", "phone" : "3630", "role" : "Admin" }
 *      responses:
 *        200:
 *          description: update rdv of given id.
 */
rdvController.put('/:id',
    // authenticateRdv, authorization, 
    rdvHandler.updateRdv)

/**
 * @openapi
 * /api/rdv/{id}:
 *  delete:
 *      tags: [Rdv]
 *      description: delete an rdv.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an rdv.
 */
rdvController.delete('/:id',
    // authenticateRdv, authorization, 
    rdvHandler.deleteRdv)