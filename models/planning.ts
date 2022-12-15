import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Planning', {
        planing_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Availability') },
                notEmpty: { msg: concatRequiredMessage('Availability') }
            }
        },
        startDate: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Availability') },
                notEmpty: { msg: concatRequiredMessage('Availability') }
            }
        },
        validityDuration: {
            type: dataTypes.INTEGER,
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
