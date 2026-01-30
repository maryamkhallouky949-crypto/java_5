
 const timesTwo = require('./timesTwo');

test('returns the number times 2', () => {
  expect(timesTwo(10)).toBe(20);
});
////
const timesTwo = require('./timesTwo');

test('returns the number times 2', () => {
  expect(timesTwo(10)).toBe(20);
});

test('throws an error when input is not a number', () => {
  expect(() => timesTwo("10")).toThrow("Input must be a number");
});