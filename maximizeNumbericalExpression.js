/**
 * 수식 최대화
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/67257
 * @param {string} expression
 * @returns {number}
 */
function solution(expression) {
  const cases = [
    ["*", "+", "-"],
    ["*", "-", "+"],
    ["+", "*", "-"],
    ["+", "-", "*"],
    ["-", "+", "*"],
    ["-", "*", "+"],
  ];

  const computation = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const calculate = (_expression, op) => {
    const regex = new RegExp("(?<![0-9])(-?[0-9]+)\\" + op + "(-?[0-9]+)");
    while (regex.test(_expression)) {
      _expression = _expression.replace(regex, (match, p1, p2) =>
        computation[op](parseInt(p1), parseInt(p2)).toString()
      );
    }
    return _expression;
  };

  const results = cases.map((c) => {
    const result = c.reduce((result, op) => calculate(result, op), expression);
    return Math.abs(parseInt(result));
  });
  return Math.max(...results);
}
