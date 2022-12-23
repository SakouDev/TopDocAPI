const { Router } = require('express')

import { handlerBanned } from '../handler/bannedHandler'

export const bannedController = Router();

/**
 * @swagger
 * tags:
 *      name: Banned
 *      description: Manage banned
 */

/**
 * @openapi
 * /api/banned:
 *   get:
 *      tags: [Banned]
 *      description: Get the list of all banned.
 *      responses:
 *        200:
 *          description: Get the list of all banned.
 */
bannedController.get('/', handlerBanned.getAllBanned)

/**
 * @openapi
 * /api/banned/{id}:
 *  get:
 *      tags: [Banned]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get banned of given id.
 */
bannedController.get('/:id'
    // , authenticateBanned
    , handlerBanned.getBannedById)

/**
 * @openapi
 * /api/banned:
 *  post:
 *      tags: [Banned]
 *      description: Add an banned
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
 *          description: Create a new banned.
 */
bannedController.post('/', handlerBanned.createBanned)

/**
 * @openapi
 * /api/banned/{id}:
 *  put:
 *      tags: [Banned]
 *      description: Update an banned
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
 *          description: Update banned of given id.
 */
bannedController.put('/:id',
    // authenticateBanned, authorization, 
    handlerBanned.updateBanned)

/**
 * @openapi
 * /api/banned/{id}:
 *  delete:
 *      tags: [Banned]
 *      description: Delete an banned.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an banned.
 */
bannedController.delete('/:id',
    // authenticateBanned, authorization, 
    handlerBanned.deleteBanned)