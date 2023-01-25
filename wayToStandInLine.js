function solution(n, k) {
  let answer = [];

  const getNthPermutation = (arr, n, k) => {
    if (arr.length <= 0) return;
    const cases = Array(n - 1)
      .fill(0)
      .reduce((total, _, i) => total * (i + 1), 1);
    const nth = k % cases === 0 ? k / cases - 1 : Math.floor(k / cases);
    answer.push(arr.splice(nth, 1)[0]);
    getNthPermutation(arr, n - 1, k % cases);
  };

  getNthPermutation(
    Array.from({ length: n }, (_, i) => i + 1),
    n,
    k
  );
  return answer;
}
