import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Rdv extends Model {

    date!: Date

    startHour!: string

    endHour!: string

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({
    date: {
        type: DataTypes.DATE,
        primaryKey: true,
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
    }
},
    {
        sequelize,
        timestamps: false
    })