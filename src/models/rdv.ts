import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Rdv extends Model {

    rdvDate!: Date

    rdvDuration!: number

}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({
    rdvDate: {
        type: DataTypes.DATE,
        primaryKey: true,
    },
    rdvDuration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        sequelize,
        timestamps: false
    })

