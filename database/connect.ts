import { DataTypes } from "sequelize"
const { Sequelize } = require('sequelize')

import { UserType } from "../types/user"
let users = require('../database/mocks/mock-user')
const UserModel = require('../models/user')

import { TokenType } from "../types/token"
let tokens = require('../database/mocks/mock-token')
const TokenModel = require('../models/tokens')

import { ActivityType } from "../types/activity"
let activities = require('../database/mocks/mock-activity')
const ActivityModel = require('../models/activity')

import { HolidayType } from "../types/holiday"
let holiday = require('../database/mocks/mock-holiday')
const HolidayModel = require('../models/holiday')

import { RdvType } from "../types/rdv"
let rdv = require('../database/mocks/mock-rdv')
const RdvModel = require('../models/rdv')

const User_ActivityModel = require('../models/user_activity')
const Activity_HolidayModel = require('../models/activity_holiday')
const User_RdvModel = require('../models/user_rdv')

import sequelize from './sequelize'

sequelize.authenticate()
    .then(() => console.log('Successfully connected to database.'))
    .catch((error: Error) => console.error(`Could not connect to database: ${error}`)
    )

const User = UserModel(sequelize, DataTypes)
const Token = TokenModel(sequelize, DataTypes)
const Activity = ActivityModel(sequelize, DataTypes)
const User_Activity = User_ActivityModel(sequelize, DataTypes)
const Holiday = HolidayModel(sequelize, DataTypes)
const Activity_Holiday = Activity_HolidayModel(sequelize, DataTypes)
const Rdv = RdvModel(sequelize, DataTypes)
const User_Rdv = User_RdvModel(sequelize, DataTypes)

// User.hasOne(Candidate, { foreignKey: 'user_id' })
// Candidate.belongsTo(User, { foreignKey: 'user_id' })

// User.hasOne(Company, { foreignKey: 'user_id' })
// Company.belongsTo(User, { foreignKey: 'user_id' })

// User.hasOne(Admin, { foreignKey: 'user_id' })
// Admin.belongsTo(User, { foreignKey: 'user_id' })

// User.hasOne(Token, { foreignKey: 'user_id' })
// Token.belongsTo(User, { foreignKey: 'user_id' })

User.belongsToMany(Activity, { through: User_Activity})
Activity.belongsToMany(User, { through: User_Activity})

Holiday.belongsToMany(Activity, { through: Activity_Holiday})
Activity.belongsToMany(Holiday, { through: Activity_Holiday})

User.belongsToMany(Rdv, { through: User_Rdv})
Rdv.belongsToMany(User, { through: User_Rdv})

const initDb = () => {

    return sequelize.sync({ force: true }).then(() => {


        tokens.map((token: TokenType) => {
            Token.create({
                user_id: token.user_id,
                refreshToken: token.refreshToken
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        holiday.map((holiday: HolidayType, index : number) => {
            Holiday.create({
                start_date : holiday.start_date,
                end_date : holiday.end_date
            })
        })

        activities.map((activity: ActivityType, index : number) => {
            Activity.create({
                name : activity.name,
                description : activity.description,
                name_cabinet : activity.name_cabinet,
                isActive : activity.isActive
            })
            .then(async (req: any) => {
                console.log(req.toJSON())
                const holidayRow = await Holiday.findByPk(index + 1);
                await req.addHoliday(holidayRow, { through: Activity_Holiday })
            })
        })

        rdv.map((rdv: RdvType, index : number) => {
            Rdv.create({
                rdv_date : rdv.rdv_date,
                rdv_duration : rdv.rdv_duration
            })
        })

        users.map((user: UserType, index : number) => {
            User.create({
                firstname: user.firstname,
                lastname: user.lastname,
                birthdate : user.birthdate,
                mail: user.mail,
                genre: user.genre,
                password: user.password,
                phone: user.phone,
                role: user.role,
                token: user.token
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
    Token,
    Activity,
    Holiday,
    Rdv,
}