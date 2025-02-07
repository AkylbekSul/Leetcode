/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let first = '';
    let second = '';
    while (l1 !== null) {
        first = l1.val + first;
        l1 = l1.next;
    }
    while (l2 !== null) {
        second = l2.val + second;
        l2 = l2.next;
    }

    let result = BigInt(first) + BigInt(second);
    let strResult = result.toString();

    let dummyHead = new ListNode(0);
    let current = dummyHead;

    for (let i = strResult.length - 1; i >= 0; i--) {
        current.next = new ListNode(Number(strResult[i]));
        current = current.next;
    }

    return dummyHead.next;
};

