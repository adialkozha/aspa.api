'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.set('useUnifiedTopology', true)
mongoose.set('debug', process.env.HOT_RELOAD)

const SessionsSchema = new Schema({
  uuid: { type: String, unique: true, required: true },
  userId: { type: String, required: true },
  // deviceId: { type: String, required: true },
  // userInfo: {
  //   userAgent: { type: String, required: true },
  //   platform: { type: String, required: true },
  //   language: { type: String, required: true },
  //   timeZone: { type: String, required: true },
  //   ip: { type: String, required: true }
  // },
  expireAt: Date
},
{
  timestamps: true
})

SessionsSchema.index(
  { expireAt: 1 },
  { expireAfterSeconds: 0 }
)

module.exports = mongoose.model('sessions', SessionsSchema)
