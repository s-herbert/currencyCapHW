/*
  given input of mm/dd/yyyy, and a number of days....
  - build a map of price to week of month
  - create a Date obj from input
  - initialize total to 0;
  - iterate through while numberOfDays > 0
    - get day of week from Date obj, continue if 0 || 6
    - determine week of the month we are in by dividing by 7 at the floor
    - use map to get a cost of banana for that week
    - add to total.
    - create a new Date for the next day
  -return total.
*/

function getBananaBudget(startDateStr, numberOfDays) {
  const ONE_DAY_MS = 86400000;
  const weeklyBananaPrices = [0.05, 0.1, 0.15, 0.2, 0.25];
  let currentDate = new Date(startDateStr);
  if (isNaN(currentDate)) {
    throw new Error('Invalid date input');
  }

  let total = 0;

  while (numberOfDays > 0) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek && dayOfWeek !== 6) {
      const dayOfMonth = currentDate.getDate();
      const weekOfMonth = Math.floor(dayOfMonth / 7);
      const costToday = weeklyBananaPrices[weekOfMonth];
      total += costToday;
    }
    currentDate = new Date(currentDate.getTime() + ONE_DAY_MS);
    numberOfDays--;
  }
  return Number(total.toFixed(2));
}

module.exports = getBananaBudget;
