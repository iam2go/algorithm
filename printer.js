/**
 * 프린터
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42587
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */
function solution(priorities, location) {
  let printList = priorities.map((priority, index) => [index, priority]);
  const _priorities = priorities.sort((a, b) => b - a);

  const findIndex = (arr, value) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i][1] === value) return i;
    }
    return -1;
  };

  let order = 0;
  for (let priority of _priorities) {
    const index = findIndex(printList, priority);
    order++;

    if (printList[index][0] === location) return order;
    printList = [...printList.slice(index + 1), ...printList.slice(0, index)];
  }

  return order;
}
