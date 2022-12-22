import { DataTypes } from "sequelize"

let users = require('../database/mocks/mock-user')
let tokens = require('../database/mocks/mock-tokens')
let holiday = require('../database/mocks/mock-holiday')
let rdv = require('../database/mocks/mock-rdv')
let locations = require('../database/mocks/mock-location')
let plannings = require('../database/mocks/mock-planning')
let activities = require('../database/mocks/mock-activity')

import { User } from '../models/user'
import { Tokens } from '../models/tokens'
import { Holiday } from '../models/holiday'
import { Rdv } from '../models/rdv'
import { Location } from '../models/location'
import { Planning } from "../models/planning"
import { Activity } from "../models/activity"

import { BannedType } from "../types/banned"
let banneds = require('../database/mocks/mock-banned')
const BannedModel = require('../models/banned')

import { HoursType } from "../types/hours"
let hours = require('../database/mocks/mock-hours')
const HoursModel = require('../models/hours')

const User_ActivityModel = require('../models/user_activity')
const Activity_HolidayModel = require('../models/activity_holiday')
const User_RdvModel = require('../models/user_rdv')

import sequelize from './sequelize'

sequelize.authenticate()
    .then(() => console.log('Successfully connected to database.'))
    .catch((error: Error) => console.error(`Could not connect to database: ${error}`)
    )

export const User_Activity = User_ActivityModel(sequelize, DataTypes)
export const Activity_Holiday = Activity_HolidayModel(sequelize, DataTypes)
export const Banned = BannedModel(sequelize, DataTypes)
export const Hours = HoursModel(sequelize, DataTypes)
export const User_Rdv = User_RdvModel(sequelize, DataTypes)

// User.hasOne(Candidate, { foreignKey: 'userId' })
// Candidate.belongsTo(User, { foreignKey: 'userId' })

// User.hasOne(Company, { foreignKey: 'userId' })
// Company.belongsTo(User, { foreignKey: 'userId' })

// User.hasOne(Admin, { foreignKey: 'userId' })
// Admin.belongsTo(User, { foreignKey: 'userId' })

// User.hasOne(Tokens, { foreignKey: 'userId' })
// Tokens.belongsTo(User, { foreignKey: 'userId' })

User.belongsToMany(Activity, { through: User_Activity })
Activity.belongsToMany(User, { through: User_Activity })

Holiday.belongsToMany(Activity, { through: Activity_Holiday })
Activity.belongsToMany(Holiday, { through: Activity_Holiday })

User.belongsToMany(Rdv, { through: User_Rdv })
Rdv.belongsToMany(User, { through: User_Rdv })

const initDb = () => {

    return sequelize.sync({ force: true }).then(() => {


        tokens.map((tokens: Tokens) => {
            Tokens.create({
                userId: tokens.userId,
                refreshToken: tokens.refreshToken
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        holiday.map((holiday: Holiday, index: number) => {
            Holiday.create({
                startDate: holiday.startDate,
                endDate: holiday.endDate
            })
        })

        activities.map((activity: Activity, index: number) => {
            Activity.create({
                name: activity.name,
                description: activity.description,
                nameCabinet: activity.nameCabinet,
                isActive: activity.isActive
            })
                .then(async (req: any) => {
                    console.log(req.toJSON())
                    const holidayRow = await Holiday.findByPk(index + 1);
                    await req.addHoliday(holidayRow, { through: Activity_Holiday })
                })
        })

        rdv.map((rdv: Rdv, index: number) => {
            Rdv.create({
                rdvDate: rdv.rdvDate,
                rdvDuration: rdv.rdvDuration
            })
        })

        locations.map((location: Location, index: number) => {
            Location.create({
                zipCode: location.zipCode,
                city: location.city,
                address: location.address
            })
        })

        plannings.map((planning: Planning, index: number) => {
            Planning.create({
                name: planning.name,
                startDate: planning.startDate,
                validityDuration: planning.validityDuration
            })
        })

        banneds.map((banned: BannedType, index: number) => {
            Banned.create({
                reason: banned.reason
            })
        })

        hours.map((hours: HoursType, index: number) => {
            Hours.create({
                today: hours.today,
                startHour: hours.startHour,
                duration: hours.duration
            })
        })

        users.map((user: User, index: number) => {
            User.create({
                firstname: user.firstname,
                lastname: user.lastname,
                birthdate: user.birthdate,
                mail: user.mail,
                genre: user.genre,
                password: user.password,
                phone: user.phone,
                role: user.role,
                tokens: user.tokens
            })
                .then(async (req: any) => {
                    console.log(req.toJSON())
                    const activityRow = await Activity.findByPk(index + 1);
                    await req.addActivity(activityRow, { through: User_Activity })
                })
        })

        console.log('Database successfully initialized.')
    })
}

module.exports = {
    initDb,
    User,
    Tokens,
    Activity,
    Holiday,
    Rdv,
}