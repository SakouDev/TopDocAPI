import { DataTypes } from "sequelize"
const { Sequelize } = require('sequelize')

import { UserType } from "../types/user"
let users = require('../database/mocks/mock-user')
const UserModel = require('../models/user')

import { tokenTypes } from "../types/token"
let tokens = require('../database/mocks/mock-token')
const TokenModel = require('../models/tokens')

import sequelize from './sequelize'

sequelize.authenticate()
    .then(() => console.log('Successfully connected to database.'))
    .catch((error: Error) => console.error(`Could not connect to database: ${error}`)
    )

const User = UserModel(sequelize, DataTypes)
const Token = TokenModel(sequelize, DataTypes)

// User.hasOne(Candidate, { foreignKey: 'user_id' })
// Candidate.belongsTo(User, { foreignKey: 'user_id' })

// User.hasOne(Company, { foreignKey: 'user_id' })
// Company.belongsTo(User, { foreignKey: 'user_id' })

// User.hasOne(Admin, { foreignKey: 'user_id' })
// Admin.belongsTo(User, { foreignKey: 'user_id' })

// User.hasOne(Token, { foreignKey: 'user_id' })
// Token.belongsTo(User, { foreignKey: 'user_id' })

const initDb = () => {

    return sequelize.sync({ force: true }).then(() => {

        users.map((user: UserType) => {
            User.create({
                firstname: user.firstname,
                lastname: user.lastname,
                birthdate : user.birthdate,
                mail: user.mail,
                genre: user.genre,
                password: user.password,
                phone: user.phone,
                role: user.role,
                token: user.token
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        tokens.map((token: tokenTypes) => {
            Token.create({
                user_id: token.user_id,
                refreshToken: token.refreshToken
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        console.log('Database successfully initialized.')
    })
}

module.exports = {
    initDb,
    User,
    Token,
}