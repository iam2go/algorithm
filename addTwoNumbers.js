/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2. Add Two Numbers
 * @see https://leetcode.com/problems/add-two-numbers/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  let result = new ListNode(0);
  let head = result;

  while (l1 !== null || l2 !== null || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = sum >= 10 ? 1 : 0;

    head.next = new ListNode(sum % 10);
    head = head.next;

    sum = carry;
  }

  return result.next;
};
