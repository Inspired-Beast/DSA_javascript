// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// link - https://leetcode.com/problems/kth-largest-element-in-an-array/description/

// NOTE - we can solve using sorting but here we are asked not to use that

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let newMaxHeap = new MaxHeap();
    nums.forEach((num)=> newMaxHeap.insert(num))
    for(let i=0; i<k-1; i++){
        newMaxHeap.remove()
    }

    return newMaxHeap.getHeap()[0]
}

// max heap class
class MaxHeap{
    constructor(){
        this.heap = []
    }

    getHeap(){
        return [...this.heap]
    }

    getNonRepHeap(){
        let nonRepSet = new Set(this.heap);
        return [...nonRepSet]
    }

    #getleftChild(parentIndex){
        return parentIndex *2 +1
    }

    #getRightChild(parentIndex){
        return parentIndex *2 +2
    }

    #getParent(childIndex){
        return Math.floor((childIndex -1)/2)
    }

    #swap(ind1, ind2){
        [this.heap[ind1], this.heap[ind2]] = [this.heap[ind2], this.heap[ind1]]
    }

    insert(value){
        this.heap.push(value);
        let ind = this.heap.length-1
        while(ind >0 && this.heap[ind]> this.heap[this.#getParent(ind)]){
            this.#swap(ind, this.#getParent(ind))
            ind = this.#getParent(ind)
        }
    }

    #sinkDown(index){ // this function will help us move the value at
                      // that particular index to its correct place in the heap
        let maxIndex = index;
        let size = this.heap.length;
        while(true){
            let leftIndex = this.#getleftChild(index);
            let rightIndex = this.#getRightChild(index);
            // comparing parent node with left child and if value of child is greater
            // than changing the maxIndex
            if(leftIndex < size && this.heap[leftIndex] > this.heap[maxIndex]){
                maxIndex = leftIndex
            }
            // comparing the rightIndex child
            // note we are changing maxIndex on both if's so as to see that
            // we swap the parent only with child node which has most value.
            if(rightIndex < size && this.heap[rightIndex] > this.heap[maxIndex]){
                maxIndex = rightIndex
            }
            if(maxIndex!=index && this.heap[index] < this.heap[maxIndex]){
                this.#swap(maxIndex, index)
                
            }else{
                return;
            }
            index = maxIndex
        }

    }

    remove(){
        if(this.heap.length === 0){
            return null
        }

        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop(); // changing top node with end node

        this.#sinkDown(0) // once we have top value removed and replaced with last
        // value in the heap array, hence calling sinkdown to place the
        // values in correct order.

        return maxValue
    }
}
