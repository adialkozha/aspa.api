const development = require('../../env.development')

exports.development = {
  ...development,
  USER_SERVICE_ADAPTER: 'mongodb://localhost:27017/user'
}

exports.test = {
  NODE_ENV: 'test',
  HOT_RELOAD: false,
  TRANSPORTER: 'nats://localhost:4222',
  USER_SERVICE_ADAPTER: 'mongodb://localhost:27017/user'
}