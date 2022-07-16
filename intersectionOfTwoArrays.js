/**
 * 349. Intersection of Two Arrays
 * @see https://leetcode.com/problems/intersection-of-two-arrays/submissions/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  let p1 = (p2 = 0);
  let result = new Set();

  while (p1 < nums1Len && p2 < nums2Len) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
      continue;
    }

    if (nums2[p2] < nums1[p1]) {
      p2++;
      continue;
    }

    result.add(nums1[p1]);
    p1++;
    p2++;
  }

  return [...result];
};
