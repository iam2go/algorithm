/**
 * 스킬트리
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/49993
 * @param {string} skill
 * @param {string[]} skill_trees
 * @returns {number}
 */

function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, "g");
  return skill_trees.filter((skillTree) => {
    const skills = skillTree.replace(regex, "");
    return skill.slice(0, skills.length) === skills;
  }).length;
}
