// QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an 
// element as a pivot and partitions the given array around the picked pivot by 
// placing the pivot in its correct position in the sorted array.

// The key process in quickSort is a partition() . The target of partitions is to place the pivot 
// (any element can be chosen to be a pivot) at its correct position in the sorted array and put 
// all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.

// Partition is done recursively on each side of the pivot after the pivot is placed in its 
// correct position and this finally sorts the array.

// worst case for quick sort is if array is already sorted
// average big O => O(n logn) and worst case as mentioned is O(n**2)

// https://www.crio.do/blog/top-10-sorting-algorithms/


function pivot(array, start=0, end=array.length-1){ // this function will give pivot which is in general is the
    //starting  value in array that's position has been defined and will remain stationary once decided using
    // this function

    let pivotIndex = start // pivotIndex will increment and will give us the value of index with which the
    //the starting value should be swapped with at the end, and that value will have fixed place and 
    // will be called as pivot
    // NOTE the pivot will be starting value of array only but its postion will be changed as shown below
    //so that it is at the correct place of the unsorted array
    for(let i = start+1; i<=end; i++){
        if(array[i]< array[start]){
            pivotIndex++ // this will tell us where the starting value of the array should be at
            // the below swapping swaps value to the left which are lesser than starting value
            // of the array and shifts value which are greater than pivot's value or starting value to
            // the right of the array
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]

        }
    }
    // now we know where our pivot should be we will swap pivot out with that element in the array.
    [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]]

    return pivotIndex // now since we have swapped out the starting value/ pivot 
    // to its correct place then we will return it's index
}

function quickSort(array, start=0, end=array.length-1){

    // this function will be recurively called until all values get sorted with the help of pivot
    //function so in nutshell as we split our array to get pivot it in turns convert our array into sorted array
    
    if(start<end){// will run quickSort till we have minimum array where we no longer need sorting
        let pivotInd = pivot(array, start, end); // get pivot value at the start of the quick sort
        quickSort(array, start, pivotInd-1) // calling quickSort recursively on left side of pivot
        quickSort(array, pivotInd+1, end) // calling quickSort on array for values present on right side of pivot
    }
    return array
}