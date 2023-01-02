const { Router } = require('express')

import { timeslotHandler } from '../handler/injection/timeslot';

export const timeslotController = Router();

/**
 * @swagger
 * tags:
 *      name: Timeslot
 *      description: Manage timeslot
 */

/**
 * @openapi
 * /api/timeslot:
 *   get:
 *      tags: [Timeslot]
 *      description: Get the list of all timeslot.
 *      responses:
 *        200:
 *          description: Get the list of all timeslot.
 */
timeslotController.get('/', timeslotHandler.getAllTimeslot)

/**
 * @openapi
 * /api/timeslot/{id}:
 *  get:
 *      tags: [Timeslot]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get timeslot of given id.
 */
timeslotController.get('/:id'
    // , authenticateTimeslot
    , timeslotHandler.getTimeslotById)

/**
 * @openapi
 * /api/timeslot:
 *  post:
 *      tags: [Timeslot]
 *      description: Add an timeslot
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
 *          description: create a new timeslot.
 */
timeslotController.post('/', timeslotHandler.createTimeslot)

/**
 * @openapi
 * /api/timeslot/{id}:
 *  put:
 *      tags: [Timeslot]
 *      description: Update an timeslot
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
 *          description: Update timeslot of given id.
 */
timeslotController.put('/:id',
    // authenticateTimeslot, authorization, 
    timeslotHandler.updateTimeslot)

/**
 * @openapi
 * /api/timeslot/{id}:
 *  delete:
 *      tags: [Timeslot]
 *      description: delete an timeslot.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an timeslot.
 */
timeslotController.delete('/:id',
    // authenticateTimeslot, authorization, 
    timeslotHandler.deleteTimeslot)