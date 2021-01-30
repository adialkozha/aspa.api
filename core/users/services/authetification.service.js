'use strict'

const bcrypt = require('bcrypt')
const { MoleculerError } = require('moleculer').Errors

module.exports = { 
    name: 'users.authetification',
    varsion: 1,
    actions: {
        login: {
            params: {
                email: { type: 'email' },
                password: { type: 'string' }
            },
            async handler(ctx) {
                const user = await ctx.call('v1.users')
            }
        }
    }
}