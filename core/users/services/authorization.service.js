'use strict'

const { MoleculerError } = require("moleculer").Errors;
const bcrypt = require('bcrypt')
const DbService = require("moleculer-db");
const dropModel = require('../../mixin/mongoose')
const jwt = require("jsonwebtoken")
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const User = require('./schemas/User')
module.exports = {
    name: 'users.authorization',
    version: 1,
    mixins: [DbService, dropModel],
    adapter: new MongooseAdapter(process.env.USER_SERVICE_ADAPTER),
    model: User,
    hooks: {
        before: {
            create: function (ctx) {
                ctx.params.password = this.hashPassword(ctx.params.password)
            }
        },
    },
    methods: {
        hashPassword(password) {
            if (password) {
                return bcrypt.hashSync(password, 10)
            }
        }
    }
}
