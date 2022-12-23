import 'dotenv/config'

import { apiController } from './src/controllers/core/apiController'

const cors = require('cors')
const express = require("express")

const app = express()

app.use(cors())

// import { ApiException } from './types/exception'
// const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express')
const sequelize = require('./src/database/connect')

import { Response, Request } from 'express'

app.use(express.json())
app.use('/api', apiController)

process.env.MOCK_DB == "true" && sequelize.initDb()


export const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})

app.get("/", (req: Request, res: Response) => {
    res.send("SWAGGER : /api/docs")
})

app.use(({ res: ApiException }: any) => {
    const message = 'Be Better.'
    return ApiException.status(404).json({ message })
})