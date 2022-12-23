import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class User_Rdv extends Model {

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

User_Rdv.init({

},
    {
        sequelize,
        timestamps: false
    })