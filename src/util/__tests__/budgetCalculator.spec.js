const budgetCalculator = require('../budgetCalculator');

describe('The calculator', () => {
  it('Throws an error if datestr is invalid', () => {
    const badDate = '50/83/1990';
    expect(()=>budgetCalculator(badDate)).toThrowError();
  });

  it('Returns 0 when given no days to count', () => {
    const startDate = '01/27/2019';
    expect(budgetCalculator(startDate, 0)).toEqual(0);
  });

  it('Returns 0.25 when totaling 7 days starting on 07/01/2018', ()=>{
    const startDate = '07/01/2018';
    expect(budgetCalculator(startDate, 7)).toEqual(0.25);
  });

  it('Returns 0.50 when totaling 7 days starting on 07/08/2018', ()=>{
    const startDate = '07/08/2018';
    expect(budgetCalculator(startDate, 7)).toEqual(0.50);
  });

  it('Returns 0.35 when totaling 7 days starting on 07/04/2018', ()=>{
    const startDate = '07/04/2018';
    expect(budgetCalculator(startDate, 7)).toEqual(0.35);
  });

  it('Returns 0.45 when totaling 7 days starting on 06/29/2018', ()=>{
    const startDate = '06/29/2018';
    expect(budgetCalculator(startDate, 7)).toEqual(0.45);
  });

  it('Returns 3.00 when totaling 31 days starting on 07/01/2018', ()=>{
    const startDate = '07/01/2018';
    expect(budgetCalculator(startDate, 31)).toEqual(3.00);
  });

  it('Returns 3.10 when totaling 33 days starting on 07/01/2018', ()=>{
    const startDate = '07/01/2018';
    expect(budgetCalculator(startDate, 33)).toEqual(3.10);
  });
});
