/**
 * 두 큐 합 같게 만들기
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/118667
 * @param {number[]} queue1
 * @param {number[]} queue2
 * @returns {number}
 */

function solution(queue1, queue2) {
  const queue = queue1.concat(queue2);
  const target = queue.reduce((a, b) => a + b) / 2;

  let start = 0;
  let end = queue1.length - 1;

  let cnt = 0;
  let sum = queue1.reduce((a, b) => a + b);

  if (!Number.isInteger(target)) return -1;

  while (start <= end) {
    if (target === sum) {
      return cnt;
    }
    if (target > sum) {
      end++;
      cnt++;
      sum += queue[end];
    } else {
      sum -= queue[start];
      cnt++;
      start++;
    }
  }

  return -1;
}
