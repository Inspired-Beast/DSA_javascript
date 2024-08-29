// Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.

// Note: this LinkedList implementation does not have a length member variable.

// Output:

// Return the middle node of the linked list.

// If the list has an even number of nodes, return the second middle node (the one closer to the end).

function findMiddleNode(){
    let temp = this.head;
    let temp_next = this.head;
    while(temp_next && temp_next.next ){
            temp = temp.next;
            temp_next = temp_next.next.next
        
    }
    return temp
}

EXplaination

// The findMiddleNode() function uses the "tortoise and hare" algorithm to find the middle node of a linked list.
// In the case of an even number of nodes, the temp_next pointer will reach the end of the list, while the temp pointer will point to the first middle node (the one closer to the head). For an odd number of nodes, the temp_next pointer will go beyond the end of the list, and the temp pointer will point to the exact middle node.
