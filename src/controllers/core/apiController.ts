import { Router } from "express";

import { userController } from "../userController";
import { holidayController } from "../holidayController";
import { rdvController } from "../rdvController";
import { locationController } from "../locationController";
import { planningController } from "../planningController";
import { activityController } from "../activityController";
import { weekdayController } from "../weekdayController";
import { bannedController } from "../bannedController";

import { port } from "../../../server";
import { authController } from "../authController";

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const apiController = Router();
const swaggerOptions = {
    openapi: "3.0.1",
    swaggerDefinition: {
        info: {
            title: 'TopDoc API',
            description: 'SWAGGER v.1.1',
            contact: {
                name: 'me'
            },
            servers: [{
                url: `http://localhost:${port}`,
                description: 'localhost'
            },],
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
        security: [
            {
                bearerAuth: []
            }
        ],
    },
    apis: [`./src/controllers/*.ts`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
apiController.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

apiController.use('/user', userController)
apiController.use('/weekday', weekdayController)
apiController.use('/holiday', holidayController)
apiController.use('/rdv', rdvController)
apiController.use('/location', locationController)
apiController.use('/planning', planningController)
apiController.use('/activity', activityController)
apiController.use('/banned', bannedController)
apiController.use('/auth', authController)



export { apiController }