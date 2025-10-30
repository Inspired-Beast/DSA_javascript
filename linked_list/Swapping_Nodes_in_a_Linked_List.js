// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/description/

// Two-pointer approach 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let dummy = new ListNode(0)
    dummy.next = head
    let slow = dummy
    let fast = dummy
    let current = dummy
    for(let i=0; i<k; i++){
        fast = fast.next
        current = current.next
    }
    while(fast){
        slow = slow.next
        fast = fast.next
    }

    let temp = slow.val
    slow.val = current.val
    current.val = temp

    return dummy.next
};

// array stored approach
// storing all elements in an array and swapping and recreating array itself
// Python solution - 
// # Definition for singly-linked list.
// # class ListNode:
// #     def __init__(self, val=0, next=None):
// #         self.val = val
// #         self.next = next
// class Solution:
//     def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
//         ll_arr_values = []
//         while head:
//             ll_arr_values.append(head.val)
//             head = head.next
//         [ll_arr_values[k-1], ll_arr_values[-k]] = [ll_arr_values[-k], ll_arr_values[k-1]]
//         newLL = ListNode(0)
//         temp = newLL
//         for val in ll_arr_values:
//             temp.next = ListNode(val)
//             temp = temp.next
        
//         return newLL.next

        