const { Router } = require('express')

import { handlerUser } from './handler'

export const userRouter = Router();

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: Manage users
 */

/**
 * @openapi
 * /api/users:
 *   get:
 *      tags: [Users]
 *      description: Get the list of all users.
 *      responses:
 *        200:
 *          description: Get the list of all users.
 */
userRouter.get('/', handlerUser.getAllUsers)

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *      tags: [Users]
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
userRouter.get('/:id'
    // , authenticateToken
    , handlerUser.getUserById)

/**
 * @openapi
 * /api/users:
 *  post:
 *      tags: [Users]
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
userRouter.post('/', handlerUser.createUser)

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *      tags: [Users]
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
userRouter.put('/:id',
    // authenticateToken, authorization, 
    handlerUser.updateUser)

/**
 * @openapi
 * /api/users/{id}:
 *  delete:
 *      tags: [Users]
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
userRouter.delete('/:id',
    // authenticateToken, authorization, 
    handlerUser.deleteUser)