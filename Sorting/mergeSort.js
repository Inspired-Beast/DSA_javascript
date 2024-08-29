function merge(array1, array2) {
    let combined = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        combined.push(array2[j]);
        j++;
    }
    return combined;
}

function mergeSort(arr){
    if(arr.length===1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left,right)
}



let originalArray = [3,1,4,2];
let sortedArray = mergeSort( originalArray );

console.log( "Original Array:", originalArray );
console.log( "\nSorted Array:", sortedArray );