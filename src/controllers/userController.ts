const { Router } = require('express')

import { handlerUser } from '../handler/userHandler'

export const userController = Router();

/**
 * @swagger
 * tags:
 *      name: User
 *      description: Manage user
 */

/**
 * @openapi
 * /api/user:
 *   get:
 *      tags: [User]
 *      description: Get the list of all user.
 *      responses:
 *        200:
 *          description: Get the list of all user.
 */
userController.get('/', handlerUser.getAllUser)

/**
 * @openapi
 * /api/user/{id}:
 *  get:
 *      tags: [User]
 *      description: Get an template by id
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 1
 *      responses:
 *        200:
 *          description: Get user of given id.
 */
userController.get('/:id'
    // , authenticateToken
    , handlerUser.getUserById)

/**
 * @openapi
 * /api/user:
 *  post:
 *      tags: [User]
 *      description: Add an user
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
 *          description: Create a new user.
 */
userController.post('/', handlerUser.createUser)

/**
 * @openapi
 * /api/user/{id}:
 *  put:
 *      tags: [User]
 *      description: Update an user
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
 *          description: Update user of given id.
 */
userController.put('/:id',
    // authenticateToken, authorization, 
    handlerUser.updateUser)

/**
 * @openapi
 * /api/user/{id}:
 *  delete:
 *      tags: [User]
 *      description: Delete an user.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: Delete an user.
 */
userController.delete('/:id',
    // authenticateToken, authorization, 
    handlerUser.deleteUser)