/**
 * 전력망을 둘로 나누기
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 * @param {number} n
 * @param {number[][]} wires
 * @returns {number}
 */
function solution(n, wires) {
  const arr = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  wires.forEach(([from, to]) => {
    arr[from][to] = 1;
    arr[to][from] = 1;
  });

  const dfs = (start) => {
    let queue = [start];
    let check = Array(n + 1).fill(false);
    let count = 0;

    check[start] = true;
    while (queue.length) {
      const wire = queue.pop();
      count++;

      arr[wire].forEach((value, i) => {
        if (value === 1 && !check[i]) {
          queue.push(i);
          check[i] = true;
        }
      });
    }
    return count;
  };

  let minGap = n;
  for (let [from, to] of wires) {
    arr[from][to] = 0;
    arr[to][from] = 0;

    const a = dfs(from);

    if (2 * a === n) return 0;
    minGap = Math.min(minGap, Math.abs(2 * a - n));

    arr[from][to] = 1;
    arr[to][from] = 1;
  }

  return minGap;
}
