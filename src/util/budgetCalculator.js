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
  let startDate = new Date(startDateStr);
  if (isNaN(startDate)) throw new Error('Invalid date input');
  const total = calculatePricesForEachDay(startDate, numberOfDays);
  return floatToDec(total);
}

function calculatePricesForEachDay(currentDate, numDays){
  let total = 0;
  while (numDays > 0) {
    total += increaseTotalIfWeekday(currentDate);
    currentDate = incrementOneDay(currentDate);
    numDays--;
  }
  return total;
}

function increaseTotalIfWeekday(currentDate){
  const weeklyBananaPrices = [0.05, 0.1, 0.15, 0.2, 0.25];
  const dayOfWeek = currentDate.getDay();
  if (dayOfWeek && dayOfWeek !== 6) {
    const dayOfMonth = currentDate.getDate();
    const weekOfMonth = Math.floor(dayOfMonth / 7);
    const costToday = weeklyBananaPrices[weekOfMonth];
    return costToday;
  }
  return 0;
}

function incrementOneDay(currentDate){
  const ONE_DAY_MS = 86400000;
  return new Date(currentDate.getTime() + ONE_DAY_MS);
}

function floatToDec(float){
  return Number(float.toFixed(2))
}



module.exports = getBananaBudget;
