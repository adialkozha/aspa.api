'use strict'

const jwt = require('jsonwebtoken')
const { MoleculerError } = require('moleculer').Errors

module.exports = {
  name: 'users.jwt',
  version: 1,

  actions: {
    sign (ctx) {
      return jwt.sign(
        {
          id: ctx.params.id,
          email: ctx.params.email
        },
        process.env.USER_AUTH_KEY,
        { expiresIn: process.env.USER_AUTH_KEY_EXPIRE_IN }
      )
    },

    verify (ctx) {
      try {
        return jwt.verify(ctx.params.token, process.env.USER_AUTH_KEY)
      } catch (error) {
        throw new MoleculerError(error.message, 401, error.name)
      }
    }

  }
}
