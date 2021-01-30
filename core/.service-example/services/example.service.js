'use strict'

const DbService = require('moleculer-db')
const MongooseAdapter = require('moleculer-db-adapter-mongoose')
const mongoose = require('mongoose')

const dropModel = require('../../_mixins/mongoose-schema-fix')

module.exports = {
  name: 'exampleService',
  version: 1,

  mixins: [
    DbService,
    dropModel // TODO: Фикс для горячей перезагрузки сервиса в процессе разработки
              // Не нужен если сервис не общается с базой
  ],

  adapter: new MongooseAdapter(EXAMPLE_SERVICE_ADAPTER),
  model: mongoose.model('Example', mongoose.Schema({
    title: { type: String },
    content: { type: String },
    votes: { type: Number, default: 0 }
  })),

  actions: {
    hello () {
      return 'Example Service'
    }
  }
}
