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

describe('formatAmount function', () =>  {
  it('formats an amount', () => {
    expect(formatAmount(10)).toBe('$ 10.00');
  });
  it('defaults to zero if the amount is not truthy', () => {
    expect(formatAmount()).toBe('$ 0.00');
  });
  it('returns a string', () => {
    expect(typeof formatAmount(10)).toBe('string');
  });
  it('should not mutate the passed argument', () => {
    const amount = 10;
    const result = formatAmount(amount);
    expect(amount).toBe(10);
  });
});
