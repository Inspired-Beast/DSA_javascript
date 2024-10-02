// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// link - https://leetcode.com/problems/reorder-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return;

    //Find the middle of the linked list and store it in slow variable
    //note here we will use hare and tortoise method
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    //Reverse the linked list from node = slow to the end of the list
    let prev = null
    let current = slow
    while(current){
        let after = current.next;
        current.next = prev
        prev = current
        current = after
    }

    //merge both actual linked list till middle of linked list and the reversed linked list
    // from middle to the end of the list
    let firstHalf = head
    let secondHalf = prev
    while(secondHalf.next){  // continues until end of second half (in reverse order)
        let temp1 = firstHalf.next; // stores next node of first half
        let temp2 = secondHalf.next;// stores next node of second half
        
        firstHalf.next = secondHalf; // links current node of first half to current node of reversed second half
        secondHalf.next = temp1 // links current node of reversed second half to the next node of the first half

        firstHalf = temp1; // move to the next node in the first half
        secondHalf = temp2 // move to the next node in the reversed second half
    
    }
};