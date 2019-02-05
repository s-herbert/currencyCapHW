const { getTotal, sendTotal } = require('../controllers/budgetController');

const routes = (app, config) => {
  app.get('/banana-budget', getTotal(config), sendTotal);
};

module.exports = routes;
