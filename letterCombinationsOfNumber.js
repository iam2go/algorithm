/**
 * 17. Letter Combinations of a Phone Number
 * @see https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let length = digits.length;
  let result = [];

  const getLetterCase = (index, combination) => {
    if (index >= length) {
      result.push(combination);
      return;
    }

    let key = digits[index];
    letters[key].split("").forEach((letter) => {
      getLetterCase(index + 1, combination + letter);
    });
  };

  getLetterCase(0, "");
  return length > 0 ? result : [];
};
