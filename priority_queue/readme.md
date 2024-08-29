Priority queue is a queue which returns the value with highest priority.

we can implement priority queue using various data structure in which some are ideal and some are not, lets see why.

1. via Linked list - we have to traverse through linked list to find highest value and that will be O(n)

2. via Array - will again have to iterate and it be O(n)

3. Hash table or object - will have to iterate if we don't know previously as to which is highest making it O(n)

4. Binary Search tree - we can get highest value but it will be o(logn)  or in worst case scenario o(n) worst case being BST having one node each of parent.

5. Heap tree - first Big O is dependent on height of the heap tree and since it is always full hence we wont find worst case scenario like BST, 
therefor height of heap tree is log n hence removing value or finding top most value will be O(log n) which is most efficient.

NOTE - see heap data structure as to why removing top level item takes this much

ALL in all heap is the data structure of choice when implmeneting priority queue

