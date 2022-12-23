const { Router } = require('express')

import { handlerActivity } from '../handler/activityHandler'

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
activityController.get('/', handlerActivity.getAllActivity)

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
    , handlerActivity.getActivityById)

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
 *          description: Create a new activity.
 */
activityController.post('/', handlerActivity.createActivity)

/**
 * @openapi
 * /api/activity/{id}:
 *  put:
 *      tags: [Activity]
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
activityController.put('/:id',
    // authenticateActivity, authorization, 
    handlerActivity.updateActivity)

/**
 * @openapi
 * /api/activity/{id}:
 *  delete:
 *      tags: [Activity]
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
activityController.delete('/:id',
    // authenticateActivity, authorization, 
    handlerActivity.deleteActivity)