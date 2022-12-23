const { Router } = require('express')

import { handlerRdv } from '../handler/rdvHandler'

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
rdvController.get('/', handlerRdv.getAllRdv)

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
    , handlerRdv.getRdvById)

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
 *          description: Create a new rdv.
 */
rdvController.post('/', handlerRdv.createRdv)

/**
 * @openapi
 * /api/rdv/{id}:
 *  put:
 *      tags: [Rdv]
 *      description: Update an rdv
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
 *          description: Update rdv of given id.
 */
rdvController.put('/:id',
    // authenticateRdv, authorization, 
    handlerRdv.updateRdv)

/**
 * @openapi
 * /api/rdv/{id}:
 *  delete:
 *      tags: [Rdv]
 *      description: Delete an rdv.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an rdv.
 */
rdvController.delete('/:id',
    // authenticateRdv, authorization, 
    handlerRdv.deleteRdv)