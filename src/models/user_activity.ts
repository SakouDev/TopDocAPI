import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class User_Activity extends Model {

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

User_Activity.init({

},
    {
        sequelize,
        timestamps: false
    })