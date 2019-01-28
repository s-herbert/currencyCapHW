/*
  for now, simple approach with while loop, 
  can refactor later with more clever approach



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


function getBananaBudget(startDateStr, numberOfDays){
  const weeklyBananaPrices = [0.05,0.10,0.15,0.20,0.25]

module.exports = getBananaBudget;
