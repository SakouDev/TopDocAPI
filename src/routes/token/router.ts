const { Router } = require('express')

import { handlerTokens } from './handler'

export const tokenRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Tokens
 *      description: Manage tokens
 */

/**
 * @openapi
 * /api/tokens:
 *   get:
 *      tags: [Tokens]
 *      description: Get the list of all tokens.
 *      responses:
 *        200:
 *          description: Get the list of all tokens.
 */
tokenRouter.get('/', handlerTokens.getAllTokens)

/**
 * @openapi
 * /api/tokens/{id}:
 *  get:
 *      tags: [Tokens]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get tokens of given id.
 */
tokenRouter.get('/:id'
    // , authenticateToken
    , handlerTokens.getTokenById)

/**
 * @openapi
 * /api/tokens:
 *  post:
 *      tags: [Tokens]
 *      description: Add an tokens
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
 *          description: Create a new tokens.
 */
tokenRouter.post('/', handlerTokens.createToken)

/**
 * @openapi
 * /api/tokens/{id}:
 *  put:
 *      tags: [Tokens]
 *      description: Update an tokens
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
 *          description: Update tokens of given id.
 */
tokenRouter.put('/:id',
    // authenticateToken, authorization, 
    handlerTokens.updateToken)

/**
 * @openapi
 * /api/tokens/{id}:
 *  delete:
 *      tags: [Tokens]
 *      description: Delete an tokens.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an tokens.
 */
tokenRouter.delete('/:id',
    // authenticateToken, authorization, 
    handlerTokens.deleteToken)