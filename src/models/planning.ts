import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Planning extends Model {

    name!: string

    startDate!: Date

    validityDuration!: number

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Planning.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Availability') },
            notEmpty: { msg: concatRequiredMessage('Availability') }
        }
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Availability') },
            notEmpty: { msg: concatRequiredMessage('Availability') }
        }
    },
    validityDuration: {
        type: DataTypes.INTEGER,
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