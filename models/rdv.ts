import { DataTypes, Model, Sequelize } from "sequelize"
import sequelize from '../database/sequelize'

export class Rdv extends Model{
    

    rdv_date! : Date

    rdv_duration! : number

}
    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }

    Rdv.init({
        rdv_date: {
            type: DataTypes.DATE,
            primaryKey: true,
        },
        rdv_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
        {
            sequelize,
            timestamps: false
        })

