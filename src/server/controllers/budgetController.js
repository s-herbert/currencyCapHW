const calculateBudget = require('../../util/budgetCalculator');
const cache = require('../../util/bananaBudgetCache');

module.exports = {
  calculateTotal: (req, res, next) => {
    const { startDate, numberOfDays } = req.query;
    const dateAndDuration = startDate + numberOfDays;
    const totalCost = cache.has(dateAndDuration)
      ? cache.getTotalFor(dateAndDuration)
      : calculateBudget(startDate, numberOfDays);
    res.locals.totalCost = totalCost;
    return next();
  },
  sendTotal: (_, res) => {
    const { totalCost } = res.locals;
    res.json({ totalCost });
  }
};
