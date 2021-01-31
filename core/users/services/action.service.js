'use strict'

const { MoleculerError } = require("moleculer").Errors;
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const User = require('./schemas/User')
module.exports = {
    name: 'users.action',
    version: 1,
    model: User,
    actions: {
        
    }
}