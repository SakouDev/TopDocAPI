const { Router } = require('express')

import { handlerHoliday } from './handler'

export const holidayRouter = Router();

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
holidayRouter.get('/', handlerHoliday.getAllHoliday)

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
holidayRouter.get('/:id'
// , authenticateHoliday
, handlerHoliday.getHolidayById)

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
 *          description: Create a new holiday.
 */
holidayRouter.post('/', handlerHoliday.createHoliday)

/**
 * @openapi
 * /api/holiday/{id}:
 *  put:
 *      tags: [Holiday]
 *      description: Update an holiday
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
 *          description: Update holiday of given id.
 */
holidayRouter.put('/:id', 
// authenticateHoliday, authorization, 
handlerHoliday.updateHoliday)

/**
 * @openapi
 * /api/holiday/{id}:
 *  delete:
 *      tags: [Holiday]
 *      description: Delete an holiday.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an holiday.
 */
holidayRouter.delete('/:id', 
// authenticateHoliday, authorization, 
handlerHoliday.deleteHoliday)