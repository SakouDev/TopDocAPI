import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Rdv extends Model {

    id! : number

    date! : Date

    startHour! : string

    endHour! : string

    userId! : number

    activityId! : number

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('startHour') },
            notEmpty: { msg: concatRequiredMessage('startHour') }
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
    }
},
    {
        sequelize,
        timestamps: false
    })