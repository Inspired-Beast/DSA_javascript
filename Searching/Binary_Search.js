// Binary Search is much faster than Linear Search, 
// but requires a sorted array to work.

// The Binary Search algorithm works by checking the value in the 
// center of the array. If the target value is lower, the next value to check is in the center of the 
// left half of the array. This way of searching means that the search area is always half of the 
// previous search area, and this is why the Binary Search algorithm is so fast.

// This process of halving the search area happens until the target value is found, or until the 
// search area of the array is empty.

function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length-1
    while(left<=right){
        let mid = Math.floor((right+left)/2) // we always sum to find mid

        if(arr[mid]===target){
            return mid // index of value to be fine
        }

        else if(arr[mid]>target){
            right = mid-1
        }
        else{
            left = mid+1
        }
    }
    return -1 // nothing found
}

console.log(BinarySearch([ 2, 3, 7, 7, 11, 15, 25], 7))