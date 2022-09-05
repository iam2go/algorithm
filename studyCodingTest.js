/**
 *
 * 코딩 테스트 공부
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/118668
 * @param {number} alp
 * @param {number} cop
 * @param {number[]} problems
 * @returns {number}
 */
function solution(alp, cop, problems) {
  let [maxAlp, maxCop] = [alp, cop];

  problems.forEach((problem) => {
    maxAlp = Math.max(maxAlp, problem[0]);
    maxCop = Math.max(maxCop, problem[1]);
  });

  let dp = Array.from({ length: maxAlp + 1 }, () =>
    Array(maxCop + 1).fill(Infinity)
  );
  dp[alp][cop] = 0;

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      if (i === maxAlp && j === maxCop) break;

      if (i < maxAlp) dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      if (j < maxCop) dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);

      for (let [alpReq, copReq, alpRwd, copRwd, time] of problems) {
        if (i < alpReq || j < copReq) continue;
        let nextAlp = alpRwd + i > maxAlp ? maxAlp : alpRwd + i;
        let nextCop = copRwd + j > maxCop ? maxCop : copRwd + j;

        dp[nextAlp][nextCop] = Math.min(dp[nextAlp][nextCop], dp[i][j] + time);
      }
    }
  }
  return dp[maxAlp][maxCop];
}
