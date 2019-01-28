const express = require('express');
const helmet = require('helmet');
const bananaAPI = require('./routes/bananaRoutes');
const bodyParser = require('body-parser');

const startServer = config => {
  return new Promise((resolve, reject) => {
    if (!config.port) reject(new Error('Server requires a port'));
    const app = express();
    app.use(bodyParser.json());
    app.use(helmet());
    app.use((err, req, res, next) => {
      reject(new Error(`Server error : ${err}`));
      res.status(500).send('Internal server error! T.T');
    });

    bananaAPI(app, config);

    const server = app.listen(config.port, () => resolve(server));
  });
};

module.exports = { startServer };
