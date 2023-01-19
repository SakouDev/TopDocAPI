import { weekdayHandler } from "../handler/injection/weekday";

const { Router } = require('express')


export const weekdayController = Router();

/**
 * @swagger
 * tags:
 *      name: Weekday
 *      description: Manage weekday
 */

/**
 * @openapi
 * /api/weekday:
 *   get:
 *      tags: [Weekday]
 *      description: Get the list of all weekday.
 *      responses:
 *        200:
 *          description: Get the list of all weekday.
 */
weekdayController.get('/', weekdayHandler.getAllWeekday)

/**
 * @openapi
 * /api/weekday/{id}:
 *  get:
 *      tags: [Weekday]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get weekday of given id.
 */
weekdayController.get('/:id'
    // , authenticateWeekday
    , weekdayHandler.getWeekdayById)

/**
 * @openapi
 * /api/weekday:
 *  post:
 *      tags: [Weekday]
 *      description: Add an weekday
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
 *          description: create a new weekday.
 */
weekdayController.post('/', weekdayHandler.createWeekday)

/**
 * @openapi
 * /api/weekday/{id}:
 *  put:
 *      tags: [Weekday]
 *      description: update an weekday
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
 *          description: update weekday of given id.
 */
weekdayController.put('/:id',
    // authenticateWeekday, authorization, 
    weekdayHandler.updateWeekday)

/**
 * @openapi
 * /api/weekday/{id}:
 *  delete:
 *      tags: [Weekday]
 *      description: delete an weekday.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an weekday.
 */
weekdayController.delete('/:id',
    // authenticateWeekday, authorization, 
    weekdayHandler.deleteWeekday)