///////////
// MOCKS //
///////////

import { user } from './mocks/mock-user'
import { token } from './mocks/mock-tokens'
import { holiday } from './mocks/mock-holiday'
import { rdv } from './mocks/mock-rdv'
import { locations } from './mocks/mock-location'
import { plannings } from './mocks/mock-planning'
import { activities } from './mocks/mock-activity'
import { banneds } from './mocks/mock-banned'
import { weekday } from './mocks/mock-weekday'

////////////
// MODELS //
////////////

import { User } from '../models/user'
import { Token } from '../models/token'
import { Holiday } from '../models/holiday'
import { Rdv } from '../models/rdv'
import { Location } from '../models/location'
import { Planning } from '../models/planning'
import { Activity } from '../models/activity'
import { Banned } from '../models/banned'
import { Weekday } from '../models/weekday'

/////////////////////
// SEQUELIZE LOGIN //
/////////////////////

import sequelize from './sequelize'
sequelize.authenticate()
    .then(() => console.log('Successfully connected to database.'))
    .catch((error: Error) => console.error(`Could not connect to database: ${error}`)
    )

//////////////////
// ASSOCIATIONS //
//////////////////

// --- Activity
Activity.hasMany(Rdv, { foreignKey: 'activityId' })
Activity.hasMany(Holiday, { foreignKey: 'activityId' })
Activity.belongsTo(Location, { foreignKey: 'locationId' })
Activity.hasOne(Planning, { foreignKey: 'activityId' })
Activity.belongsToMany(User, { through: 'User_Activity' })

// --- Banned
Banned.belongsTo(User, { foreignKey: 'userId' })

// --- Holiday
Holiday.belongsTo(Activity, { foreignKey: 'activityId' })

// --- Weekday
Weekday.belongsTo(Planning, { foreignKey: 'planningId' })

// --- Location
Location.hasOne(User, { foreignKey: 'locationId' })
Location.hasOne(Activity, { foreignKey: 'locationId' })

// --- Planning
Planning.hasMany(Weekday, { foreignKey: 'planningId' })
Planning.belongsTo(Activity, { foreignKey: 'activityId' })

// --- Rdv
Rdv.belongsTo(User, { foreignKey: 'userId' })
Rdv.belongsTo(Activity, { foreignKey: 'activityId' })

// --- Token
Token.belongsTo(User, { foreignKey: 'userId' })

// --- User
User.hasMany(Rdv, { foreignKey: 'userId' })
User.hasMany(Token, { foreignKey: 'userId' })
User.hasOne(Banned, { foreignKey: 'userId' })
User.belongsTo(Location, { foreignKey: 'locationId' })
User.belongsToMany(Activity, { through: 'User_Activity' })

/////////////
// INIT DB //
/////////////

const initDb = () => {

    return sequelize.sync({ force: true }).then(() => {

        user.map((user, index) => {
            User.create({
                firstname: user.firstname,
                lastname: user.lastname,
                birthdate: user.birthdate,
                mail: user.mail,
                genre: user.genre,
                password: user.password,
                phone: user.phone,
                role: user.role
            })
                .then(async (req: any) => {
                    console.log(req.toJSON())
                    const activityRow = await Activity.findByPk(index + 1);
                    await req.addActivity(activityRow, { through: 'User_Activity' })
                })
        })

        token.map((token) => {
            Token.create({
                userId: token.userId,
                refreshToken: token.refreshToken
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })

        holiday.map((holiday, index: number) => {
            Holiday.create({
                startDate: holiday.startDate,
                endDate: holiday.endDate
            })
        })

        activities.map((activity, index: number) => {
            Activity.create({
                name: activity.name,
                description: activity.description,
                nameCabinet: activity.nameCabinet,
                isActive: activity.isActive
            })
                .then(async (req: any) => {
                    console.log(req.toJSON())
                    const holidayRow = await Holiday.findByPk(index + 1);
                    await req.addHoliday(holidayRow, { through: 'Activity_Holiday' })
                })
        })

        rdv.map((rdv, index: number) => {
            Rdv.create({
                rdvDate: rdv.rdvDate,
                rdvDuration: rdv.rdvDuration
            })
        })

        locations.map((location, index: number) => {
            Location.create({
                zipCode: location.zipCode,
                city: location.city,
                address: location.address
            })
        })

        plannings.map((planning, index: number) => {
            Planning.create({
                name: planning.name,
                startDate: planning.startDate,
                validityDuration: planning.validityDuration
            })
        })

        banneds.map((banned, index: number) => {
            Banned.create({
                reason: banned.reason
            })
        })

        weekday.map((weekday, index: number) => {
            Weekday.create({
                today: weekday.today,
                startHour: weekday.startHour,
                endHour: weekday.endHour,
                duration: weekday.duration,
                planningId: weekday.planningId
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