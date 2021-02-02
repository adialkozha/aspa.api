const development = require('../../env.development')

exports.development = {
  ...development,
  EXAMPLE_SERVICE_ADAPTER: 'mongodb://localhost/example-service'
}

exports.test = {
  NODE_ENV: 'test',
  HOT_RELOAD: true,
  TRANSPORTER: 'nats://localhost:4222',
  EXAMPLE_SERVICE_ADAPTER: 'mongodb://localhost/example-service'
}

// exports.staging = {
//   NODE_ENV: 'staging'
// }
 