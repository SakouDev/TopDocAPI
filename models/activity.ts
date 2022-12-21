
import { DataTypes, Sequelize, STRING } from "sequelize"


module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `${data} is requis`
    }

    return sequelize.define('Activity', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Tokens') },
                notEmpty: { msg: concatRequiredMessage('Tokens') }
            }
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Tokens') },
                notEmpty: { msg: concatRequiredMessage('Tokens') }
            }
        },
        name_cabinet: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Tokens') },
                notEmpty: { msg: concatRequiredMessage('Tokens') }
            }
        },
        isActive: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
    })
}
