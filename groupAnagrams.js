/**
 * 49. Group Anagrams
 * @see https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagram = strs.reduce((result, str) => {
    let key = [...str].sort();
    result[key] = result[key] ? [...result[key], str] : [str];
    return result;
  }, {});
  return Object.values(anagram);
};
