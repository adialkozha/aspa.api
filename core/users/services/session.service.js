'use strict'

const uuid = require('uuid').v4

const dbService = require('moleculer-db')
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const Session = require('./schemas/Session')
const dropModel = require('../../mixin/mongoose')

module.exports = {
    name: 'users.session',
    version: 1,
    mixins: [
        dbService,
        dropModel
    ],

    adapter: new MongooseAdapter(process.env.USER_SERVICE_ADAPTER),
    model: Session,

    settings: {
        sessionPeriod: 5
    },

    actions: {
        take(ctx) {
            return this._find(ctx, {
                query: {
                    uuid: { $eq: ctx.params.uuid }
                }
            })
        },

        create: {
            params: {
                id: { type: 'string' }
            },
            async handler(ctx) {
                console.log('create.session', ctx.params)

                const deviceId = ctx.params.deviceId
                console.log(deviceId)
                // const userInfo = JSON.parse(
                //     Buffer.from(deviceId, 'base64')
                //         .toString('ascii')
                // )

                const expireAt = new Date()
                expireAt.setDate(expireAt.getDate() + this.settings.sessionPeriod)

                const session = await this._create(ctx, {
                    uuid: uuid(),
                    userId: ctx.params.id,
                    // deviceId: ctx.params.deviceId,
                    // userInfo: {
                    //     userAgent: userInfo.userAgent,
                    //     platform: userInfo.platform,
                    //     language: userInfo.language,
                    //     timeZone: userInfo.timezone,
                    //     ip: ctx.params.deviceIp
                    // },
                    expireAt: expireAt
                })

                return session.uuid
            },
        },

        async refresh(ctx) {
            const newUuid = uuid()
            const expireAt = new Date()
            expireAt.setDate(expireAt.getDate() + this.settings.sessionPeriod)

            await this.adapter.model
                .findOneAndUpdate({ uuid: ctx.params.uuid }, { uuid: newUuid })
                .exec()

            return newUuid
        },

        async delete(ctx) {
            return this.adapter.model
                .findOneAndDelete({ uuid: ctx.params.uuid })
                .exec()
        },
        get: false,
        count: false,
        find: false,
        list: false,
        update: false,
        insert: false,
        remove: false
    }
}



