const {
  calculateTotal,
  sendTotal
} = require('../controllers/budgetController');

const routes = app => {
  app.get('/banana-budget', calculateTotal, sendTotal);
};

module.exports = routes;
