const { ServiceBroker } = require('moleculer')

const config = {
  namespace: 'webModule',
  nodeID: 'REPL',
  metadata: {},
  transporter: 'nats://localhost:4222',
  internalServices: false,
  hotReload: false,
  replCommands: [],

  created (broker) {},
  started (broker) {},
  stopped (broker) {}
}

const broker = new ServiceBroker(config)

broker.start()
  .then(() => {
    broker.repl()
  })
