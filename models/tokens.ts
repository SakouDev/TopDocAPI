import { DataTypes, Model, Sequelize } from "sequelize"
import sequelize from '../database/sequelize'

export class Tokens extends Model{
    
    user_id! : number

    refreshToken! : string

}
    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }

    Tokens.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Tokens') },
                notEmpty: { msg: concatRequiredMessage('Tokens') }
            }
        },
    },
        {
            sequelize,
            timestamps: false
        })

