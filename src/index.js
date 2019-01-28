const { startServer } = require('./server/server');
const config = require('./server/config/serverConfig');

startServer(config)
  .then(() => console.log(`Listening for requests on ${config.port}`))
  .catch(err => console.log(`Nope, cuz ${err}`));
