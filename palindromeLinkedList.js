/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 234. Palindrome Linked List
 * @see https://leetcode.com/problems/palindrome-linked-list/
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  var isPalindrome = function (head) {
    let reverse = null;
    let fast = head,
      slow = head;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow.prev = reverse;
      reverse = slow;
      slow = slow.next;
    }

    if (fast) {
      slow = slow.next;
    }

    while (reverse) {
      if (reverse.val !== slow.val) return false;
      slow = slow.next;
      reverse = reverse.prev;
    }
    return true;
  };
};
