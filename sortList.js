/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 148. Sort List
 * @see https://leetcode.com/problems/sort-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let array = [];
  let root = head;

  while (head) {
    array.push(head.val);
    head = head.next;
  }

  array.sort((a, b) => a - b);

  head = root;
  array.forEach((value) => {
    root.val = value;
    root = root.next;
  });

  return head;
};
