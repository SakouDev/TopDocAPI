import 'dotenv/config'
import cors from 'cors'
import express, { application } from "express"
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { apiController } from './src/controllers/core/apiController'
import { errorHandler } from './src/middleware/globalError'

const app = express()
app.use(cors())

const sequelize = require('./src/database/connect')

app.use(express.json({ limit: '50kb' }))
app.use('/api', apiController)
app.use(errorHandler)

const logsSave = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// Utiliser morgan pour les logs avec ('propriétés qu'on veut voir', { enregistrement dans un fichier access.log })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date[web]', { stream: logsSave }))

export const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})

app.get('/', (req, res) => {
    res.status(404).send('/api/v0.1/docs for Swagger');
});

app.get('*', (req, res) => {
    res.status(404).send('NOT FOUND.');
});

process.env.MOCK_DB == "true" && sequelize.initDb()