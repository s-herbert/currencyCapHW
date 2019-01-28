const getTotalCost = require('../../util/bananaCalculator');

module.exports = {
  respondWithTotalCost: (req, res) => {
    const { startDate, numberOfDays } = req.query;
    const totalCost = getTotalCost(startDate, numberOfDays);
    res.json({ totalCost });
  }
};
