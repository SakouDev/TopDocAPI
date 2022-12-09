
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }

    return sequelize.define('Rdv', {
        rdv_date: {
            type: dataTypes.DATE,
            primaryKey: true,
        },
        rdv_duration: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    })
}
