class Heap{
    #heap = [] // we will use arrays to implement Max heap

    getHeap(){
        return [...this.#heap];
    }

    #leftChild(index){ // gives index of left child if parent's
                        // index is given
        return 2* index +1 
    }

    #rightChild(index){// gives index of right child if parent's
                       // index is given
        return 2 * index + 2
    }

    #parent(index){ // gives index of parent when we provide rigth/ left child's index
        return Math.floor((index -1)/2)
    }

    #swap(index1, index2){ // swaps parent and child nodes
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]]
    }

    insert(value){ // insert the new value at correct order making use of above functions
                    // note since we are making a max heap here hence we will loop till the current
                    //node is greater than parent node and swap consequqntly.
        this.#heap.push(value)
        let current = this.#heap.length  - 1

        while(current>0 && (this.#heap[current] > this.#heap[this.#parent(current)])){
            this.#swap(current, this.#parent(current));
            current = this.#parent(current)
        }
    
    }

    #sinkDown(index){ // this function will help us move the value at
                      // that particular index to its correct place in the heap
        let maxIndex = index;
        let size = this.#heap.length;

        while(true){
            let leftIndex = this.#leftChild(index);
            let rightIndex = this.#rightChild(index);
            // comparing parent node with left child and if value of child is greater
            // than changing the maxIndex
            if(leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]){
                maxIndex = leftIndex
            }
            // comparing the rightIndex child
            // note we are changing maxIndex on both if's so as to see that
            // we swap the parent only with child node which has most value.
            if(rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]){
                maxIndex = rightIndex
            }

            if(maxIndex!=index && this.heap[index]<=this.heap[maxIndex]){
                this.#swap(maxIndex, index)
            }else{
                return;
            }
            index = maxIndex
        }

    }

    remove(){
        if(this.#heap.length === 0){
            return null
        }

        if(this.#heap.length === 1){
            return this.#heap.pop()
        }

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop(); // changing top node with end node

        this.#sinkDown(0) // once we have top value removed and replaced with last
        // value in the heap array, hence calling sinkdown to place the
        // values in correct order.

        return maxValue
    }
}

const myHeap = new Heap();
myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);
console.log(myHeap.getHeap())
myHeap.insert(100)
myHeap.insert(75)
console.log(myHeap.getHeap())
myHeap.remove()

console.log(myHeap.getHeap())


