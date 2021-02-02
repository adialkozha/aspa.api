'use strict'

const DbService = require('moleculer-db')
const { MoleculerError } = require("moleculer").Errors;
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const User = require('./schemas/User')
module.exports = {
    name: 'users.action',
    version: 1,
    model: User,
    mixins:[DbService],
    actions: {
        async getByEmail (ctx) {
            return await User.findOne(
              { email: { $eq: ctx.params.email } })
        },
    }
}