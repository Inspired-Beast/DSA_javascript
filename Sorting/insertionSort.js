// Insertion sort is like sorting playing cards in your hands. You split the cards into two groups: 
// the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it 
// in the right place in the sorted group.

// Insertion sort is a simple sorting algorithm that works by iteratively 
// inserting each element of an unsorted list into its correct position in a sorted 
// portion of the list.

// To achieve insertion sort, follow these steps:

// We start with second element of the array as first element in the array is assumed to be sorted.
// Compare second element with the first element and check if the second element is smaller then swap them.
// Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.
// Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.
// Repeat until the entire array is sorted.

function insertionSort(array){
    for(let i=1; i< array.length; i++){ // starting at index 1
        let temp = array[i] // fixing temp with i and will start at index 1 not 0 as we will insert this value
        // after comparing all values before i in the array

        // note keep var here as we need to use j down below and compare only with temp not array[i]
        // as when we change array[j+1] to array[j] it can change the value at that index in the array
        // so we will compare with temp as it has fixed value with which we started comparing in the 
        //nested loop
        for(var j= i-1; array[j] > temp && j>=0; j--){
             // this will iterate j till j is greater then temp
            // i.e value at index i above and will change the value one by one depending upon the condition
            array[j+1] = array[j]
        }
        array[j+1] = temp // once values are shifted in above loop we will insert the temp to the place which should
        // have minimum value after all numbers greater than temp has been shifted to one place before
    }
    return array
}

let arr = [45, 36, 21, 19, 22, 23]
console.log(insertionSort(arr))