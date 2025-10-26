// Consider a devotee wishing to give offerings to temples along a mountain range. The temples are located in a row at different heights. Devotee is very religious and wants to offer each temple at least one offering. If two adjacent temples are at different altitudes, then the temple that is higher up should receive more offerings than the one that is at lower altitude. If two adjacent temples are at the same height, then their offerings relative to each other does not matter. The height of the N temples are given in the array arr[]. Find the minimum number of offerings required.

// Example 1:

// Input: N = 3
// arr = {1, 2, 2}
// Output: 4
// Explaination: Bring 1 offering each for 
// first and third temple and 2 offerings 
// for the second temple.
 

// Example 2:

// Input: N = 6
// arr = {1, 4, 3, 6, 2, 1}
// Output: 10
// Explaination: 
// 1 offering each for 1st, 3rd and 6th temple, 
// 2 offerings each for 2nd and 5th temple and 
// 3 offerings for the 4th temple.

// Question - https://www.geeksforgeeks.org/problems/temple-offerings2831/1
// Solution - https://www.geeksforgeeks.org/dsa/temple-offerings/


// Brute force
// User function Template for javascript

/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    offerings(n, arr) {
        let total = 0
        
        for(let i=0; i<n; i++){
            let left =1
            let right = 1
            //for left
            for(let j=i-1; j>=0; j--){
                if(arr[j]<arr[j+1]){
                    ++left
                }else{
                    break
                }
            }
            
            //for right
            for(let k=i+1; k<n; k++){
                if(arr[k]<arr[k-1]){
                    ++right
                }else{
                    break
                }
            }
            
            total += Math.max(left, right)
            
        }
        return total

        
    }
}


//DP Approach
// Javascript code for the above approach
const offeringNumber = (n, templeHeight) => {

    // Initialize counts for all temples
    let chainSize = new Array(n);
    for (let i = 0; i < n; ++i) {
    chainSize[i] = { L: -1, R: -1 };
    }
    
    // Values corner temples
    chainSize[0].L = 1;
    chainSize[n - 1].R = 1;
    
    // Filling left and right values using same
    // values of previous(or next)
    for (let i = 1; i < n; ++i) {
        if (templeHeight[i - 1] < templeHeight[i])
            chainSize[i].L = chainSize[i - 1].L + 1;
        else
            chainSize[i].L = 1;
    }
    for (let i = n - 2; i >= 0; --i) {
        if (templeHeight[i + 1] < templeHeight[i])
            chainSize[i].R = chainSize[i + 1].R + 1;
        else
            chainSize[i].R = 1;
    }
    
    // Computing max of left and right for all
    // temples and returning sum.
    let sum = 0;
    for (let i = 0; i < n; ++i)
        sum += Math.max(chainSize[i].L, chainSize[i].R);
    return sum;
    }
    
    // Driver function
    let arr = [1,2,2]
    console.log(offeringNumber(3, arr));
    let arr1=[1, 4, 3, 6, 2, 1]
    console.log(offeringNumber(6, arr1));
    
    // This code is contributed by lokeshpotta20.