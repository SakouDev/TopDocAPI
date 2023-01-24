import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Planning extends Model {

    startDate!: Date

    rdvDuration!: number

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
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('startDate') },
            notEmpty: { msg: concatRequiredMessage('startDate') }
        }
    },
    rdvDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('rdvDuration') },
            notEmpty: { msg: concatRequiredMessage('rdvDuration') }
        }
    },
    validityDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('validityDuration') },
            notEmpty: { msg: concatRequiredMessage('validityDuration') }
        }
    }
},
    {
        sequelize,
        timestamps: false
    })