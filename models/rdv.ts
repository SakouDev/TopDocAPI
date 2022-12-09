
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }

    return sequelize.define('Rdv', {
        rendez_vous_date: {
            type: dataTypes.DATE,
            primaryKey: true,
        },
        rendez_vous_duration: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    })
}
