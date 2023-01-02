import { planningHandler } from "../handler/injection/planning";

const { Router } = require('express')

export const planningController = Router();

/**
 * @swagger
 * tags:
 *      name: Planning
 *      description: Manage planning
 */

/**
 * @openapi
 * /api/planning:
 *   get:
 *      tags: [Planning]
 *      description: Get the list of all planning.
 *      responses:
 *        200:
 *          description: Get the list of all planning.
 */
planningController.get('/', planningHandler.getAllPlanning)

/**
 * @openapi
 * /api/planning/{id}:
 *  get:
 *      tags: [Planning]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get planning of given id.
 */
planningController.get('/:id'
    // , authenticatePlanning
    , planningHandler.getPlanningById)

/**
 * @openapi
 * /api/planning:
 *  post:
 *      tags: [Planning]
 *      description: Add an planning
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
 *          description: create a new planning.
 */
planningController.post('/', planningHandler.createPlanning)

/**
 * @openapi
 * /api/planning/{id}:
 *  put:
 *      tags: [Planning]
 *      description: update an planning
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
 *          description: update planning of given id.
 */
planningController.put('/:id',
    // authenticatePlanning, authorization, 
    planningHandler.updatePlanning)

/**
 * @openapi
 * /api/planning/{id}:
 *  delete:
 *      tags: [Planning]
 *      description: delete an planning.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an planning.
 */
planningController.delete('/:id',
    // authenticatePlanning, authorization, 
    planningHandler.deletePlanning)