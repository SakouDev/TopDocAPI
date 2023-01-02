import { hoursHandler } from "../handler/injection/hours";

const { Router } = require('express')


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
hoursController.get('/', hoursHandler.getAllHours)

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
    , hoursHandler.getHoursById)

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
 *          description: create a new hours.
 */
hoursController.post('/', hoursHandler.createHours)

/**
 * @openapi
 * /api/hours/{id}:
 *  put:
 *      tags: [Hours]
 *      description: update an hours
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
 *          description: update hours of given id.
 */
hoursController.put('/:id',
    // authenticateHours, authorization, 
    hoursHandler.updateHours)

/**
 * @openapi
 * /api/hours/{id}:
 *  delete:
 *      tags: [Hours]
 *      description: delete an hours.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an hours.
 */
hoursController.delete('/:id',
    // authenticateHours, authorization, 
    hoursHandler.deleteHours)