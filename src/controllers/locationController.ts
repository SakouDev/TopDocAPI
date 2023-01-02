import { locationHandler } from "../handler/injection/location";

const { Router } = require('express')


export const locationController = Router();

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
locationController.get('/', locationHandler.getAllLocation)

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
locationController.get('/:id'
    // , authenticateToken
    , locationHandler.getLocationById)

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
 *          description: create a new location.
 */
locationController.post('/', locationHandler.createLocation)

/**
 * @openapi
 * /api/location/{id}:
 *  put:
 *      tags: [Location]
 *      description: update an location
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
 *          description: update location of given id.
 */
locationController.put('/:id',
    // authenticateToken, authorization, 
    locationHandler.updateLocation)

/**
 * @openapi
 * /api/location/{id}:
 *  delete:
 *      tags: [Location]
 *      description: delete an location.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an location.
 */
locationController.delete('/:id',
    // authenticateToken, authorization, 
    locationHandler.deleteLocation)