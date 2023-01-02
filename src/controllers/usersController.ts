const { Router } = require('express')

import { userHandler } from "../handler/injection/user";


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
userController.get('/', userHandler.getAllUser)

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
    , userHandler.getUserById)

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
 *          description: create a new user.
 */
userController.post('/', userHandler.createUser)

/**
 * @openapi
 * /api/user/{id}:
 *  put:
 *      tags: [User]
 *      description: update an user
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
 *          description: update user of given id.
 */
userController.put('/:id',
    // authenticateToken, authorization, 
    userHandler.updateUser)

/**
 * @openapi
 * /api/user/{id}:
 *  delete:
 *      tags: [User]
 *      description: delete an user.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *      responses:
 *        200:
 *          description: delete an user.
 */
userController.delete('/:id',
    // authenticateToken, authorization, 
    userHandler.deleteUser)