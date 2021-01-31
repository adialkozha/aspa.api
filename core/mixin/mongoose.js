'use strict'

const mongoose = require('mongoose')

module.exports = {
  methods: {
    dropModel () {
      const schemaName = this.adapter.model.modelName
      delete mongoose.connection.models[schemaName]
    }
  },
  stopped () {
    this.dropModel()
  }
}
