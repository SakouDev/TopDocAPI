import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Weekday extends Model {

    weekday!: string

    startHour!: string

    endHour!: string

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Weekday.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    weekday: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('weekday') },
            notEmpty: { msg: concatRequiredMessage('weekday') }
        }
    },
    startHour: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('startHour') },
            notEmpty: { msg: concatRequiredMessage('startHour') }
        }
    },
    endHour: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('endHour') },
            notEmpty: { msg: concatRequiredMessage('endHour') }
        }
    },
},
    {
        sequelize,
        timestamps: false
    })