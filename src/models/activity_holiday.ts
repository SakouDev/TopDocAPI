import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Activity_Holiday extends Model {

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Activity_Holiday.init({

},
    {
        sequelize,
        timestamps: false
    })