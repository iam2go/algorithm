/**
 * 신고 결과 받기
 * @see https://programmers.co.kr/learn/courses/30/lessons/92334
 * @param {string[]} id_list
 * @param {string[]} report
 * @param {number} k
 */

function solution(id_list, report, k) {
  let _report = new Set(report);
  let reporter = {};
  let reportCount = {};
  _report.forEach((list) => {
    const [from, to] = list.split(" ");
    if (!reporter[from]) {
      reporter[from] = [];
    }
    reporter[from].push(to);

    let count = reportCount[to] || 0;
    reportCount[to] = count + 1;
  });

  let banned = Object.keys(reportCount).filter(
    (user) => reportCount[user] >= k
  );

  return id_list.map((user) => {
    if (!reporter[user]) return 0;
    let count = 0;
    banned.forEach((bannedUser) => {
      if (reporter[user].includes(bannedUser)) {
        count += 1;
      }
    });
    return count;
  });
}
