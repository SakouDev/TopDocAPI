import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Rdv extends Model {

    rdvStartDate!: Date

    rdvEndHour!: string

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({
    rdvStartDate: {
        type: DataTypes.DATE,
        primaryKey: true,
    },
    rdvEndHour: {
        type: DataTypes.STRING,
    }
},
    {
        sequelize,
        timestamps: false
    })