import { Router } from "express";

import { userController } from "../userController";
import { tokenController } from "../tokenController";
import { holidayController } from "../holidayController";
import { rdvController } from "../rdvController";
import { locationController } from "../locationController";
import { planningController } from "../planningController";
import { activityController } from "../activityController";
import { hoursController } from "../hoursController";
import { timeslotController } from '../timeslotController';
import { bannedController } from "../bannedController";

import { port } from "../../../server";

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
apiController.use('/hours', hoursController)
apiController.use('/token', tokenController)
apiController.use('/holiday', holidayController)
apiController.use('/rdv', rdvController)
apiController.use('/location', locationController)
apiController.use('/planning', planningController)
apiController.use('/activity', activityController)
apiController.use('/timeslot', timeslotController)
apiController.use('/banned', bannedController)


export { apiController }