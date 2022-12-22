import { DataTypes, Model } from "sequelize"
import sequelize from '../database/sequelize'

export class User extends Model {

    id!: number

    firstname!: string

    lastname!: string

    birthdate!: string

    mail!: string

    genre!: string

    password!: string

    phone!: number

    role!: string

    tokens!: string

}

const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notNull: { msg: concatRequiredMessage('Prénom') },
            notEmpty: { msg: concatRequiredMessage('Prénom') }
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notNull: { msg: concatRequiredMessage('Nom') },
            notEmpty: { msg: concatRequiredMessage('Nom') }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notNull: { msg: concatRequiredMessage('Prénom') },
            notEmpty: { msg: concatRequiredMessage('Mot de passe') }
        }
    },
    birthdate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notNull: { msg: concatRequiredMessage('Date de naissance') },
            notEmpty: { msg: concatRequiredMessage('Date de naissance') }
        }
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notNull: { msg: concatRequiredMessage('Prénom') },
            notEmpty: { msg: concatRequiredMessage('Prénom') }
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            is: /^$|^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g
        },
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            // notNull: { msg: concatRequiredMessage('Prénom') },
            notEmpty: { msg: concatRequiredMessage('Prénom') }
        }
    },
    tokens: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            // notNull: { msg: concatRequiredMessage('Prénom') },
            notEmpty: { msg: concatRequiredMessage('Prénom') }
        }
    },
},
    {
        sequelize,
        timestamps: false
    })