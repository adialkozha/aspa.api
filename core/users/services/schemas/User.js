'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.set('useUnifiedTopology', true)
mongoose.set('debug', process.env.HOT_RELOAD)

const usersSchema = new Schema({
    email: { type: String, lowercase: true, unique: true, required: [true, "can not be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    username: { type: String, required: true },
    name: { type: String, required: [true, 'can not be blank'] },
    surname: { type: String, required: [true, 'can not be blank'] },
    dateOfBirth: { type: Date, required: true, trim: true },
    gender: { type: String, enum: ["male", "female"] },
    password: { type: String, required: [true, 'can not be blank'] }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('users', usersSchema)
