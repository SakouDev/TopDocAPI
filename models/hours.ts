import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Hours', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        today: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('reason') },
                notEmpty: { msg: concatRequiredMessage('reason') }
            }
        },
        startHour: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('reason') },
                notEmpty: { msg: concatRequiredMessage('reason') }
            }
        },
        duration: {
            type: dataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('reason') },
                notEmpty: { msg: concatRequiredMessage('reason') }
            }
        },
    },
        {
            timestamps: false
        })
}
