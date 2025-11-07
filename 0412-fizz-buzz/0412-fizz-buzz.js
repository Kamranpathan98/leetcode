/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
     const res = [];
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? res.push("FizzBuzz")
      : i % 3 === 0
      ? res.push("Fizz")
      : i % 5 === 0
      ? res.push("Buzz")
      : res.push(`${i}`);
  }
  return res;
};