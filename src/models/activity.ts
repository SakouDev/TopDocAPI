import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class Activity extends Model {

    name!: string

    description!: string

    nameCabinet!: string

    isActive!: boolean

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Activity.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('name') },
            notEmpty: { msg: concatRequiredMessage('name') }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('description') },
            notEmpty: { msg: concatRequiredMessage('description') }
        }
    },
    nameCabinet: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('nameCabinet') },
            notEmpty: { msg: concatRequiredMessage('nameCabinet') }
        }
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
},
    {
        sequelize,
        timestamps: false
    })