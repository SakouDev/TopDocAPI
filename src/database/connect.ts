
// MOCKS //

import { user } from './mocks/mock-user'
import { token } from './mocks/mock-tokens'
import { holiday } from './mocks/mock-holiday'
import { rdv } from './mocks/mock-rdv'
import { locations } from './mocks/mock-location'
import { plannings } from './mocks/mock-planning'
import { activities } from './mocks/mock-activity'
import { banneds } from './mocks/mock-banned'
import { hours } from './mocks/mock-hours'
import { timeslots } from './mocks/mock-timeslot'

// MODELS //

import { User } from '../models/user'
import { Token } from '../models/token'
import { Holiday } from '../models/holiday'
import { Rdv } from '../models/rdv'
import { Location } from '../models/location'
import { Planning } from '../models/planning'
import { Activity } from '../models/activity'
import { Banned } from '../models/banned'
import { Hours } from '../models/hours'
import { Timeslot } from '../models/timeslot'



// SEQUELIZE LOGIN //

import sequelize from './sequelize'
sequelize.authenticate()
.then(() => console.log('Successfully connected to database.'))
.catch((error: Error) => console.error(`Could not connect to database: ${error}`)
)

// ASSOCIATIONS //

User.hasOne(Rdv, { foreignKey: 'userId' })
Rdv.belongsTo(User, { foreignKey: 'userId' })

User.hasOne(Banned, { foreignKey: 'userId' })
Banned.belongsTo(User, { foreignKey: 'userId' })

User.hasMany(Token, { foreignKey : 'userId' })
Token.belongsTo(User, { foreignKey : 'userId' })

User.belongsToMany(Activity, { through: 'User_Activity' })
Activity.belongsToMany(User, { through: 'User_Activity' })

Holiday.belongsToMany(Activity, { through: 'Activity_Holiday' })
Activity.belongsToMany(Holiday, { through: 'Activity_Holiday' })

User.belongsToMany(Rdv, { through: 'User_Rdv' })
Rdv.belongsToMany(User, { through: 'User_Rdv' })

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
                userId : token.userId,
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

        hours.map((hours, index: number) => {
            Hours.create({
                today: hours.today,
                startHour: hours.startHour,
                duration: hours.duration
            })
        })

        timeslots.map((timeslot, index: number) => {
            Timeslot.create({
                weekday: timeslot.weekday,
                startHour: timeslot.startHour,
                endHour: timeslot.endHour
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