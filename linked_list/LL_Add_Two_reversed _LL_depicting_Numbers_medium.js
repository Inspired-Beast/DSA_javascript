// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// link - https://leetcode.com/problems/add-two-numbers/
 

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

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
    let l3 = new ListNode() // dummy linked list where each added digit will go
    let temp = l3 // initializing temp pointer which will store and traverse the newly created LL
    let carry = 0 // carry counter
    let value = 0
    while(l1 || l2){
        value = (l1? l1.val:0) +(l2? l2.val:0) + carry // if l1 or l2 linked list have values
        //then only add those otherwise add 0
        carry = 0
        if(value>9){ // since value can't be greater than 9 or it will carry hence using carry counter
            // to forward the carry and to add value using modulous to find the other signifact of carried 
            //sum to the LL
            carry = 1
            value = value %10
        }
        else{
            carry=0
        }

        temp.next = new ListNode(value) // joining new LL nodes to temp and traversing
        temp = temp.next
        
        l1 = l1.next? l1.next:0 // only traversing given linked list if next element exists
        l2 = l2.next? l2.next:0
        console.log(value, carry)
    }
    if(carry===1){ // incase of both ll's being finished and there is still carry left we will add that 
        //carry to end of newly create linked list storing the reversed sum
        
        temp.next = new ListNode(1)
    }
    return l3.next // since temp adding values to temp.next hence returing from starting value
};