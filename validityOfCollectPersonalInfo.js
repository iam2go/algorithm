/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/150370
 * @param {string} today
 * @param {string[]} terms
 * @param {string[]} privacies
 * @returns {number[]}
 */

function solution(today, terms, privacies) {
  const MONTH = 12;
  const DAY = 28;

  const dateToDays = (date) => {
    const [year, month, day] = date.split(".");
    return parseInt(year) * MONTH * DAY + parseInt(month) * DAY + parseInt(day);
  };

  const validityOfTerms = terms.reduce((result, term) => {
    const [type, validity] = term.split(" ");
    result[type] = validity * DAY;
    return result;
  }, {});

  const todayToDays = dateToDays(today);
  return privacies.reduce((result, info, index) => {
    const [date, termType] = info.split(" ");
    if (dateToDays(date) + validityOfTerms[termType] <= todayToDays) {
      result.push(index + 1);
    }
    return result;
  }, []);
}
