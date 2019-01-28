const { startServer } = require('./server/server');
const config = require('./server/config/serverConfig');

startServer(config)
  .then(() => console.log('server started!!'))
  .catch(err => console.log(`Nope, cuz ${err}`));
