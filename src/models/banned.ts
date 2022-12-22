import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Banned extends Model {

    reason!: string

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Banned.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    reason: {
        type: DataTypes.STRING,
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