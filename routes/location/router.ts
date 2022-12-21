const { Router } = require('express')

import { handlerLocation } from './handler'
import { authenticateToken } from '../../middleware/authenticate'
import { authorization } from '../../middleware/authorizations';

export const locationRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Location
 *      description: Manage locations
 */

/**
 * @openapi
 * /api/location:
 *   get:
 *      tags: [Location]
 *      description: Get the list of all locations.
 *      responses:
 *        200:
 *          description: Get the list of all locations.
 */
locationRouter.get('/', handlerLocation.getAllLocations)

/**
 * @openapi
 * /api/location/{id}:
 *  get:
 *      tags: [Location]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get location of given id.
 */
locationRouter.get('/:id'
// , authenticateToken
, handlerLocation.getLocationById)

/**
 * @openapi
 * /api/location:
 *  post:
 *      tags: [Location]
 *      description: Add an location
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
 *          description: Create a new location.
 */
locationRouter.post('/', handlerLocation.createLocation)

/**
 * @openapi
 * /api/location/{id}:
 *  put:
 *      tags: [Location]
 *      description: Update an location
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
 *          description: Update location of given id.
 */
locationRouter.put('/:id', 
// authenticateToken, authorization, 
handlerLocation.updateLocation)

/**
 * @openapi
 * /api/location/{id}:
 *  delete:
 *      tags: [Location]
 *      description: Delete an location.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an location.
 */
locationRouter.delete('/:id', 
// authenticateToken, authorization, 
handlerLocation.deleteLocation)