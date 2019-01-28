const calculateBudget = require('../../util/budgetCalculator');
const simpleCache = require('../../util/bananaBudgetCache');

module.exports = {
  getTotal: (req, res, next) => {
    const { startDate, numberOfDays } = req.query;
    const dateAndDuration = startDate + numberOfDays;
    let totalCost;
    if (simpleCache.has(dateAndDuration)) {
      totalCost = simpleCache.getTotalFor(dateAndDuration);
    } else {
      totalCost = calculateBudget(startDate, numberOfDays);
      simpleCache.add(dateAndDuration, totalCost);
    }
    res.locals.totalCost = totalCost;
    return next();
  },
  sendTotal: (_, res) => {
    const { totalCost } = res.locals;
    res.json({ totalCost });
  }
};
