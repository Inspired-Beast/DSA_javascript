// LL: Reverse Between ( ** Interview Question)
// Implement a member function called reverseBetween(m, n) that reverses the nodes between indexes (using 0-based indexing)  m and n (inclusive) in the linked list.
// Note: this linked list class does NOT have a tail which will make this method easier to implement.
// Assumption: You can assume that m and n are not out of bounds.

// Output:

// The function should reverse the nodes between the indexes m and n in the linked list. The reversal should be done in-place.

// Example 1:

// Suppose you have a LinkedList object, list, with the following values:
// 1 -> 2 -> 3 -> 4 -> 5

// After calling the reverseBetween(1, 3) function:
// list.reverseBetween(1, 3);
// The linked list should now have the following values:
// 1 -> 4 -> 3 -> 2 -> 5


function reverseBetween(m, n){
    if(this.head===null){
        return;     }
    if(n-m <=0 || m>=this.length){
        return;    }
    
    let dummy = new Node(null);
    dummy.next = this.head;
    let prev = dummy;
    let current = this.head;
    
    for(let i = 0; i<m; i++){
        prev = prev.next
        current = current.next     
    } // run this loop to have prev just before the part of linked list we want to be reversed

    let newDummy = null
    let subhead = prev // marker for reversal after this reversal process will begin
    
    for(let j = 0; j<=n-m; j++){ 
        let temp = current.next;
        current.next = newDummy;
        newDummy = current;
        current = temp	   
    }
    subhead.next.next = current; //connect to the reversal point's next next
    subhead.next = newDummy // connect the new reversed start to the reversal point
    this.head = dummy.next;
}

// explaination - https://algo.monster/liteproblems/92
// https://www.youtube.com/watch?v=oDL8vuu2Q0E