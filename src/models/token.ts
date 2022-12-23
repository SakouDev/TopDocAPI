import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Token extends Model {

    userId!: number

    refreshToken!: string

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Token.init({
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Token') },
            notEmpty: { msg: concatRequiredMessage('Token') }
        }
    },
},
    {
        sequelize,
        timestamps: false
    })