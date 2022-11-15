/**
 * 303. Range Sum Query - Immutable
 * @see https://leetcode.com/problems/range-sum-query-immutable/description/
 */

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sum = nums.reduce((sum, num, index) => {
    const element = index > 0 ? sum[index - 1] + num : num;
    sum.push(element);
    return sum;
  }, []);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const sumArr = this.sum;
  return left > 0 ? sumArr[right] - sumArr[left - 1] : sumArr[right];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
