/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 24. Swap Nodes in Pairs
 * @see https://leetcode.com/problems/swap-nodes-in-pairs/
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let pairNode = head.next;
  head.next = swapPairs(pairNode.next);
  pairNode.next = head;
  return pairNode;
};
