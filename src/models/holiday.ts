import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Holiday extends Model {

    startDate!: Date

    endDate!: Date

}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Holiday.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Nom') },
            notEmpty: { msg: concatRequiredMessage('Nom') }
        }
    },
    endDate: {
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

