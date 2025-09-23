// Given the head of a linked list, return the list after sorting it in ascending order.

 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// https://leetcode.com/problems/sort-list/

//Using merge sort
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next){
        return head
    }
    let dummy1 = new ListNode(0)
    let dummy2 = new ListNode(0)
    let temp = head
    let after = head
    let temp1 = dummy1
    let temp2 = dummy2
    while(after && after.next){
        temp1.next = temp
        temp1 = temp
        temp = temp.next
        after = after.next.next
    }

    temp1.next = null
    temp2.next = temp

    let left = sortList(dummy1.next)
    let right = sortList(dummy2.next)

    console.log(left, right)
    return merge(left, right)
};

var merge = function(ll1, ll2){
    const dummy = new ListNode(0)
    let current = dummy

    while(ll1 && ll2){
        if(ll1.val<ll2.val){
            current.next = ll1
            ll1 = ll1.next
        }else{
            current.next = ll2
            ll2 = ll2.next
        }
        current = current.next
    }
    if(ll1){
        current.next = ll1
    }else{
        current.next = ll2
    }
    return dummy.next
}