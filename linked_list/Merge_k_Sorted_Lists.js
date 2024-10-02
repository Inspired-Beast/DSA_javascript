// ou are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 
// link - https://leetcode.com/problems/merge-k-sorted-lists/description

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length<=1){
        return lists[0] || null
    }
    let final = lists[0]
    for(let i=1; i<lists.length; i++){
        final= merge(final, lists[i])
    }
    return final
};

var merge = function(list1, list2){
    let dummyNode = new ListNode(0)
    let dummy = dummyNode

    let temp1 = list1;
    let temp2 = list2;

    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            dummy.next = temp1;
            temp1 = temp1.next
        }
        else{
            dummy.next = temp2
            temp2 = temp2.next
        }
        dummy = dummy.next
    }
    if(temp1){
        dummy.next = temp1
    }
    if(temp2){
        dummy.next = temp2
    }

    return dummyNode.next
}