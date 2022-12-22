import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Timeslot extends Model {

    weekday!: string

    startHour!: Date

    endHour!: Date

}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Timeslot.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    weekday: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Availability') },
            notEmpty: { msg: concatRequiredMessage('Availability') }
        }
    },
    startHour: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Availability') },
            notEmpty: { msg: concatRequiredMessage('Availability') }
        }
    },
    endHour: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Availability') },
            notEmpty: { msg: concatRequiredMessage('Availability') }
        }
    }
},
    {
        sequelize,
        timestamps: false
    })

