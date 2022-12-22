const { Router } = require('express')

import { handlerTimeslot } from './handler'

export const activityRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Timeslot
 *      description: Manage activity
 */

/**
 * @openapi
 * /api/activity:
 *   get:
 *      tags: [Timeslot]
 *      description: Get the list of all activity.
 *      responses:
 *        200:
 *          description: Get the list of all activity.
 */
activityRouter.get('/', handlerTimeslot.getAllTimeslot)

/**
 * @openapi
 * /api/activity/{id}:
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
 *          description: Get activity of given id.
 */
activityRouter.get('/:id'
    // , authenticateTimeslot
    , handlerTimeslot.getTimeslotById)

/**
 * @openapi
 * /api/activity:
 *  post:
 *      tags: [Timeslot]
 *      description: Add an activity
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
 *          description: Create a new activity.
 */
activityRouter.post('/', handlerTimeslot.createTimeslot)

/**
 * @openapi
 * /api/activity/{id}:
 *  put:
 *      tags: [Timeslot]
 *      description: Update an activity
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
 *          description: Update activity of given id.
 */
activityRouter.put('/:id',
    // authenticateTimeslot, authorization, 
    handlerTimeslot.updateTimeslot)

/**
 * @openapi
 * /api/activity/{id}:
 *  delete:
 *      tags: [Timeslot]
 *      description: Delete an activity.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an activity.
 */
activityRouter.delete('/:id',
    // authenticateTimeslot, authorization, 
    handlerTimeslot.deleteTimeslot)