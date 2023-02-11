/**
 * 187. Repeated DNA Sequences
 * @see https://leetcode.com/problems/repeated-dna-sequences
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const dnaSequence = new Set();
  let answer = new Set();
  for (let start = 0, len = s.length; start <= len - 10; start++) {
    const dna = s.slice(start, start + 10);
    if (dnaSequence.has(dna)) {
      answer.add(dna);
    }
    dnaSequence.add(dna);
  }
  return [...answer];
};
