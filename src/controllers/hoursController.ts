const { Router } = require('express')

import { handlerHours } from '../handler/hoursHandler'

export const hoursController = Router();

/**
 * @swagger
 * tags:
 *      name: Hours
 *      description: Manage hours
 */

/**
 * @openapi
 * /api/hours:
 *   get:
 *      tags: [Hours]
 *      description: Get the list of all hours.
 *      responses:
 *        200:
 *          description: Get the list of all hours.
 */
hoursController.get('/', handlerHours.getAllHours)

/**
 * @openapi
 * /api/hours/{id}:
 *  get:
 *      tags: [Hours]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get hours of given id.
 */
hoursController.get('/:id'
    // , authenticateHours
    , handlerHours.getHoursById)

/**
 * @openapi
 * /api/hours:
 *  post:
 *      tags: [Hours]
 *      description: Add an hours
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
 *          description: Create a new hours.
 */
hoursController.post('/', handlerHours.createHours)

/**
 * @openapi
 * /api/hours/{id}:
 *  put:
 *      tags: [Hours]
 *      description: Update an hours
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
 *          description: Update hours of given id.
 */
hoursController.put('/:id',
    // authenticateHours, authorization, 
    handlerHours.updateHours)

/**
 * @openapi
 * /api/hours/{id}:
 *  delete:
 *      tags: [Hours]
 *      description: Delete an hours.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an hours.
 */
hoursController.delete('/:id',
    // authenticateHours, authorization, 
    handlerHours.deleteHours)