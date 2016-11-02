import {
  calcTotal,
  formatAmount
} from './helpers';

describe('calcTotal function', () => {
  it('calculates the total of multiplying price and quantity', () => {
    expect(calcTotal(0.5, 3)).toBe(1.5);
  });

  it('checks for truthy parameters', () => {
    expect(calcTotal(5)).not.toBeTruthy();
    expect(calcTotal(null, 5)).not.toBeTruthy();
    expect(calcTotal()).not.toBeTruthy();
  });
});
