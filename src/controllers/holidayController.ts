import { holidayHandler } from "../handler/injection/holiday";

const { Router } = require('express')

export const holidayController = Router();

/**
 * @swagger
 * tags:
 *      name: Holiday
 *      description: Manage holiday
 */

/**
 * @openapi
 * /api/holiday:
 *   get:
 *      tags: [Holiday]
 *      description: Get the list of all holiday.
 *      responses:
 *        200:
 *          description: Get the list of all holiday.
 */
holidayController.get('/', holidayHandler.getAllHoliday)

/**
 * @openapi
 * /api/holiday/{id}:
 *  get:
 *      tags: [Holiday]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get holiday of given id.
 */
holidayController.get('/:id'
    // , authenticateHoliday
    , holidayHandler.getHolidayById)

/**
 * @openapi
 * /api/holiday:
 *  post:
 *      tags: [Holiday]
 *      description: Add an holiday
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
 *          description: create a new holiday.
 */
holidayController.post('/', holidayHandler.createHoliday)

/**
 * @openapi
 * /api/holiday/{id}:
 *  put:
 *      tags: [Holiday]
 *      description: update an holiday
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
 *          description: update holiday of given id.
 */
holidayController.put('/:id',
    // authenticateHoliday, authorization, 
    holidayHandler.updateHoliday)

/**
 * @openapi
 * /api/holiday/{id}:
 *  delete:
 *      tags: [Holiday]
 *      description: delete an holiday.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an holiday.
 */
holidayController.delete('/:id',
    // authenticateHoliday, authorization, 
    holidayHandler.deleteHoliday)