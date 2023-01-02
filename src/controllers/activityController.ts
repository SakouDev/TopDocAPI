const { Router } = require('express')

import { activityHandler } from '../handler/injection/activity';

export const activityController = Router();

/**
 * @swagger
 * tags:
 *      name: Activity
 *      description: Manage activity
 */

/**
 * @openapi
 * /api/activity:
 *   get:
 *      tags: [Activity]
 *      description: Get the list of all activity.
 *      responses:
 *        200:
 *          description: Get the list of all activity.
 */
activityController.get('/', activityHandler.getAllActivity)

/**
 * @openapi
 * /api/activity/{id}:
 *  get:
 *      tags: [Activity]
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
activityController.get('/:id'
    // , authenticateActivity
    , activityHandler.getActivityById)

/**
 * @openapi
 * /api/activity:
 *  post:
 *      tags: [Activity]
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
 *          description: create a new activity.
 */
activityController.post('/', activityHandler.createActivity)

/**
 * @openapi
 * /api/activity/{id}:
 *  put:
 *      tags: [Activity]
 *      description: update an activity
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
 *          description: update activity of given id.
 */
activityController.put('/:id',
    // authenticateActivity, authorization, 
    activityHandler.updateActivity)

/**
 * @openapi
 * /api/activity/{id}:
 *  delete:
 *      tags: [Activity]
 *      description: delete an activity.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an activity.
 */
activityController.delete('/:id',
    // authenticateActivity, authorization, 
    activityHandler.deleteActivity)