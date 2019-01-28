const { getTotal, sendTotal } = require('../controllers/budgetController');

const routes = app => {
  app.get('/banana-budget', getTotal, sendTotal);
};

module.exports = routes;
