// Write a method called hasLoop that is part of the linked list class.

// The method should be able to detect if there is a cycle or loop present in the linked list.

// You are required to use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the loop.

// This algorithm uses two pointers: a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a loop in the linked list, the two pointers will eventually meet at some point. If there is no loop, the fast pointer will reach the end of the list.

function  hasLoop(){
    let slow = this.head;
    let fast = this.head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
        if(slow==fast){
            return true
        }
    }
    return false
}


// The hasLoop() function is used to detect if a linked list contains a loop (cycle) or not.

// It also utilizes the "tortoise and hare" algorithm.

// Here's a step-by-step explanation of the logic:



// Initialize two pointers, slow and fast, both pointing to the head of the linked list.

// Traverse the linked list using a while loop. The loop continues as long as fast is not null (i.e., it has not reached the end of the list), and fast.next is also not null (i.e., there is at least one more node after the current fast node).

// Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast pointer two steps forward (i.e., fast = fast.next.next).

// Check if the slow and fast pointers have become equal. If they have, it means there is a loop in the linked list, and the function returns true.

// If the loop terminates without the slow and fast pointers becoming equal, it means the linked list has no loop, and the function returns false.



// The "tortoise and hare" algorithm works by having two pointers move at different speeds through the linked list. If there is a loop, the faster pointer (the hare) will eventually catch up to the slower pointer (the tortoise) inside the loop. If there is no loop, the faster pointer will reach the end of the list.

