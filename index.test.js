const { sum } = require('./index');

test('test sum function, 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// // 주석 풀면 pre-push hook에서 test 통과 못해서 push가 막힙니다.
// test("this will fail",() => {
//   expect(sum(1,2)).toBe(4);
// })
