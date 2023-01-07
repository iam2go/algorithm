/**
 * 롤케이크 자르기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/132265
 * @param {Number[]} toppings
 * @returns {number}
 */
function solution(toppings) {
  let a = { length: 0 };
  let b = toppings.reduce((total, topping) => {
    total[topping] = (total[topping] || 0) + 1;
    return total;
  }, {});

  b.length = Object.keys(b).length;

  return toppings.reduce((result, topping) => {
    if (!a[topping]) {
      a[topping] = 0;
      a.length += 1;
    }
    a[topping] += 1;
    if (b[topping] > 1) b[topping] -= 1;
    else {
      delete b[topping];
      b.length -= 1;
    }

    return a.length === b.length ? result + 1 : result;
  }, 0);
}
