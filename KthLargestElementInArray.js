/**
 * 215. Kth Largest Element in an Array
 * @see https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new Heap(nums);

  let result = 0;
  while (k > 0) {
    k--;
    result = heap.remove();
  }
  return result;
};

class Heap {
  constructor(array) {
    this.heap = array;
    this.heapify();
  }

  heapify() {
    if (this.heap.length <= 1) return;
    const root = Math.floor(Math.floor(this.heap.length / 2));
    for (let i = root; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  remove() {
    const arr = this.heap;
    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop();
    this.shiftDown(0);
    return min;
  }

  shiftDown(i) {
    let childIndex = this.getMinChildIndex(i);
    while (
      childIndex < this.heap.length &&
      this.heap[childIndex] > this.heap[i]
    ) {
      this.swap(i, childIndex);
      i = childIndex;
      childIndex = this.getMinChildIndex(i);
    }
  }

  getMinChildIndex(i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (this.heap[right] === undefined || this.heap[left] > this.heap[right])
      return left;
    else return right;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
