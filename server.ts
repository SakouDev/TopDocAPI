import 'dotenv/config'
import cors from 'cors'
import express from "express"
import { apiController } from './src/controllers/core/apiController'
import { Response, Request } from 'express'

const app = express()
app.use(cors())

const sequelize = require('./src/database/connect')

app.use(express.json({ limit: '50kb' }))
app.use('/api', apiController)


export const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})

app.get('*',(req, res) => {
    res.status(404).send('Be better.');
});

process.env.MOCK_DB == "true" && sequelize.initDb()