import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {

    const concatRequiredMessage = (data: string) => {
        return `Le champ ${data} est requis`
    }

    return sequelize.define('User', {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: { msg: concatRequiredMessage('Prénom') },
                notEmpty: { msg: concatRequiredMessage('Prénom') }
            }
        },
        lastname: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: { msg: concatRequiredMessage('Nom') },
                notEmpty: { msg: concatRequiredMessage('Nom') }
            }
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: { msg: concatRequiredMessage('Prénom') },
                notEmpty: { msg: concatRequiredMessage('Mot de passe') }
            }
        },
        birthdate: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: { msg: concatRequiredMessage('Date de naissance') },
                notEmpty: { msg: concatRequiredMessage('Date de naissance') }
            }
        },
        mail: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                // notNull: { msg: concatRequiredMessage('Prénom') },
                notEmpty: { msg: concatRequiredMessage('Prénom') }
            }
        },
        phone: {
            type: dataTypes.STRING,
            allowNull: true,
            validate: {
                is: /^$|^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g
            },
        },
        role: {
            type: dataTypes.STRING,
            allowNull: true,
            validate: {
                // notNull: { msg: concatRequiredMessage('Prénom') },
                notEmpty: { msg: concatRequiredMessage('Prénom') }
            }
        },
        token: {
            type: dataTypes.STRING,
            allowNull: true,
            validate: {
                // notNull: { msg: concatRequiredMessage('Prénom') },
                notEmpty: { msg: concatRequiredMessage('Prénom') }
            }
        },
    },
        {
            timestamps: false
        })
}
