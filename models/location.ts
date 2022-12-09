
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Location', {
        location_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        address: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Availability') },
                notEmpty: { msg: concatRequiredMessage('Availability') }
            }
        },
        zipCode: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Availability') },
                notEmpty: { msg: concatRequiredMessage('Availability') }
            }
        },
        city: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Availability') },
                notEmpty: { msg: concatRequiredMessage('Availability') }
            }
        }
    },
        {
            timestamps: false
        })
}
