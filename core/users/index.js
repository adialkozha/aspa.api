const { ServiceBroker } = require('moleculer')

const config = {
  namespace: 'webModule',
  nodeID: 'users',

  metadata: {},

  logger: {
    type: 'Console',
    options: {
      level: process.env.LOG_LEVEL,
      colors: true,
      moduleColors: true,
      formatter: process.env.LOG_FORMATTER,
      objectPrinter: null,
      autoPadding: true
    }
  },

  transporter: process.env.TRANSPORTER,

  requestTimeout: 5000,
  retryPolicy: {
    enabled: true,
    retries: 5,
    delay: 100,
    maxDelay: 1000,
    factor: 2,
    check: err => err && !!err.retryable
  },

  contextParamsCloning: false,
  maxCallLevel: 100,
  heartbeatInterval: 5,
  heartbeatTimeout: 15,

  tracking: {
    enabled: true,
    shutdownTimeout: 5000
  },

  disableBalancer: false,

  registry: {
    strategy: 'RoundRobin',
    preferLocal: true
  },

  circuitBreaker: {
    enabled: true,
    threshold: 0.5,
    windowTime: 60,
    minRequestCount: 20,
    halfOpenTime: 10 * 1000,
    check: err => err && err.code >= 500
  },

  bulkhead: {
    enabled: true,
    concurrency: 10,
    maxQueueSize: 100
  },

  transit: {
    maxQueueSize: 50 * 1000,
    disableReconnect: false,
    disableVersionCheck: false,
    packetLogFilter: ['HEARTBEAT']
  },

  uidGenerator: null,

  errorHandler: null,

  cacher: null,
  serializer: 'JSON',

  validator: true,

  metrics: {
    enabled: false,
    reporter: [
      'Console'
    ]
  },

  tracing: {
    enabled: process.env.TRACE,
    exporter: [
      'Console'
    ]
  },

  internalServices: true,
  internalMiddlewares: true,

  hotReload: process.env.HOT_RELOAD,

  replCommands: [],

  skipProcessEventRegistration: false,

  ServiceFactory: null,
  ContextFactory: null,

  created (broker) {},
  started (broker) {},
  stopped (broker) {}
}

const broker = new ServiceBroker(config)
broker.loadServices(`${__dirname}/services`)

broker.start()
