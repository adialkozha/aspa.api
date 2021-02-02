'use strict'

const bcrypt = require('bcrypt')
const { MoleculerError } = require('moleculer').Errors

module.exports = {
    name: 'users.authetification',
    version: 1,
    actions: {
        login: {
            params: {
                email: { type: 'email' },
                password: { type: 'string' }
            },
            async handler(ctx) {
                // check email
                const user = await ctx.call('v1.users.action.getByEmail', {
                    email: ctx.params.email
                })
                // check exists user
                if (user.length === 0) {
                    throw new MoleculerError('User not found', 500, 'USER_NOT_FOUND')
                }
                //compare password
                const password = bcrypt.compareSync(
                    ctx.params.password,
                    user.password
                )
                console.log(password)
                //if password incorrect
                if (!password) {
                    throw new MoleculerError('Incorrect password', 500, 'USER_INCORRECT_PASSWORD')
                }

                if (password) {
                    try {
                        console.log(user._id)
                        const refresh = await ctx.call('v1.users.session.create', {
                            id: String(user._id),
                            // deviceId: ctx.meta.deviceId,
                            // deviceIp: ctx.meta.deviceIp
                        })
                        console.log('refresh', refresh)

                        const access = await ctx.call('v1.users.jwt.sign',
                            { id: user._id }
                        )
                        return { access: access, refresh: refresh }
                    } catch (err) {
                        throw new MoleculerError(err.message, 500, 'INTERNAL_SERVER_ERROR')
                    }
                }
            }
        },
        refreshToken: {
            params: {
                refresh: { type: 'string', length: 36 }
            },
            async handler(ctx) {
                const session = await ctx.call(
                    'v1.users.session.take',
                    { uuid: ctx.params.refresh }
                )

                if (session.length !== 0) {
                    if (ctx.meta.deviceId !== session[0].deviceId || ctx.meta.deviceIp !== session[0].userInfo.ip) {
                        await ctx.call(
                            'v1.users.session.delete',
                            { uuid: session[0].uuid }
                        )
                        throw new MoleculerError('invalid session', 401, 'INVALID_SESSION')
                    }

                    try {
                        const refresh = await ctx.call(
                            'v1.users.session.refresh',
                            { uuid: session[0].uuid }
                        )
                        const access = await ctx.call(
                            'v1.users.jwt.sign',
                            { id: session[0]._id }
                        )
                        return { access: access, refresh: refresh }
                    } catch (err) {
                        throw new MoleculerError(err.message, 500, 'INTERNAL_SERVER_ERROR')
                    }
                }
                // session does not exist
                throw new MoleculerError('user not logged in', 401, 'USER_NOT_LOGGED_IN')
            },
            logout(ctx) {
                return ctx.call('v1.users.session.delete', {
                    uuid: ctx.params.uuid
                })
            }
        }
    }
}
