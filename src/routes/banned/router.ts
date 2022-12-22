const { Router } = require('express')

import { handlerBanned } from './handler'

export const activityRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Banned
 *      description: Manage activity
 */

/**
 * @openapi
 * /api/activity:
 *   get:
 *      tags: [Banned]
 *      description: Get the list of all activity.
 *      responses:
 *        200:
 *          description: Get the list of all activity.
 */
activityRouter.get('/', handlerBanned.getAllBanned)

/**
 * @openapi
 * /api/activity/{id}:
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
 *          description: Get activity of given id.
 */
activityRouter.get('/:id'
    // , authenticateBanned
    , handlerBanned.getBannedById)

/**
 * @openapi
 * /api/activity:
 *  post:
 *      tags: [Banned]
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
activityRouter.post('/', handlerBanned.createBanned)

/**
 * @openapi
 * /api/activity/{id}:
 *  put:
 *      tags: [Banned]
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
    // authenticateBanned, authorization, 
    handlerBanned.updateBanned)

/**
 * @openapi
 * /api/activity/{id}:
 *  delete:
 *      tags: [Banned]
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
    // authenticateBanned, authorization, 
    handlerBanned.deleteBanned)