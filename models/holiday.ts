import { DataTypes, Model, Sequelize } from "sequelize"
import sequelize from '../database/sequelize'

export class Holiday extends Model{
    

    start_date! : Date

    end_date! : Date

}
    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }

    Holiday.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Nom') },
                notEmpty: { msg: concatRequiredMessage('Nom') }
            }
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Nom') },
                notEmpty: { msg: concatRequiredMessage('Nom') }
            }
        },
    },
        {
            sequelize,
            timestamps: false
        })

