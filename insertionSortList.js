/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 147. Insertion Sort List
 * @see https://leetcode.com/problems/insertion-sort-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let cur = new ListNode(-5001);
  let curHead = cur;

  while (head) {
    while (cur.next && cur.next.val < head.val) {
      cur = cur.next;
    }
    [cur.next, head.next, head] = [head, cur.next, head.next];

    if (head && cur.val > head.val) {
      cur = curHead;
    }
  }
  return curHead.next;
};
