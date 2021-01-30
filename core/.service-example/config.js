const env = require('./env')
const production = require('../../env.production')

module.exports = {
  name: 'dashboardApi', // TODO: Replace
  script: `${__dirname}/index.js`,

  instances: 1,
  autorestart: true,
  watch: false,
  max_memory_restart: '1G',

  error_file: `${__dirname}/logs/err.log`,
  out_file: `${__dirname}/logs/out.log`,
  combine_logs: true,
  merge_logs: false,

  env: env.development,
  env_test: env.test,
  env_production: production
}
