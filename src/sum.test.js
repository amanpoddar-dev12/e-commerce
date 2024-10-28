const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  const a = 10;
  const b = 20;
  const result = 30;
  expect(sum(a, b)).toBe(result);
});

test("testing for sum function", () => {
  const a = 100;
  const b = 200;
  const result = 300;
  expect(sum(a, b)).toBe(result);
});
