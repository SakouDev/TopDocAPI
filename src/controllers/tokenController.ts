const { Router } = require('express')

import { tokenHandler } from '../handler/injection/token';

export const tokenController = Router();

/**
 * @swagger
 * tags:
 *      name: Token
 *      description: Manage token
 */

/**
 * @openapi
 * /api/token:
 *   get:
 *      tags: [Token]
 *      description: Get the list of all token.
 *      responses:
 *        200:
 *          description: Get the list of all token.
 */
tokenController.get('/', tokenHandler.getAllToken)

/**
 * @openapi
 * /api/token/{id}:
 *  get:
 *      tags: [Token]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get token of given id.
 */
tokenController.get('/:id'
    // , authenticateToken
    , tokenHandler.getTokenById)

/**
 * @openapi
 * /api/token:
 *  post:
 *      tags: [Token]
 *      description: Add an token
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
 *          description: create a new token.
 */
tokenController.post('/', tokenHandler.createToken)

/**
 * @openapi
 * /api/token/{id}:
 *  put:
 *      tags: [Token]
 *      description: update an token
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
 *          description: update token of given id.
 */
tokenController.put('/:id',
    // authenticateToken, authorization, 
    tokenHandler.updateToken)

/**
 * @openapi
 * /api/token/{id}:
 *  delete:
 *      tags: [Token]
 *      description: delete an token.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an token.
 */
tokenController.delete('/:id',
    // authenticateToken, authorization, 
    tokenHandler.deleteToken)