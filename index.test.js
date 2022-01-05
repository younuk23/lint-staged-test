const { sum } = require('./index');

test('test sum function, 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
