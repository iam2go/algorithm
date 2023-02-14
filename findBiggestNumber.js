/**
 * 뒤에 있는 큰 수 찾기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/154539
 * @param {number[]} numbers
 * @returns {number[]}
 */
function solution(numbers) {
  let stack = [];
  let result = Array(numbers.length).fill(-1);

  numbers.forEach((num, i) => {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < num) {
      const index = stack.pop();
      result[index] = num;
    }
    stack.push(i);
  });

  return result;
}
