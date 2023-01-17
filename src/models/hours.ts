import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Hours extends Model {

    today!: string

    startHour!: Date

    endHour!: Date

    duration!: number

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Hours.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    today: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('reason') },
            notEmpty: { msg: concatRequiredMessage('reason') }
        }
    },
    startHour: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('reason') },
            notEmpty: { msg: concatRequiredMessage('reason') }
        }
    },
    endHour: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('reason') },
            notEmpty: { msg: concatRequiredMessage('reason') }
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('reason') },
            notEmpty: { msg: concatRequiredMessage('reason') }
        }
    },
},
    {
        sequelize,
        timestamps: false
    })