'use strict'

const { MoleculerError } = require("moleculer").Errors;
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const DbService = require("../mixins/db.mixin");

module.exports = {
    name: 'users.authorization',
    varsion: 1,
    mixins: [DbService],
    adapter: new MongooseAdapter(process.env.PRESS_CENTER_SERVICE_ADAPTER),
    model: User,
    actions: {
        
    }
}