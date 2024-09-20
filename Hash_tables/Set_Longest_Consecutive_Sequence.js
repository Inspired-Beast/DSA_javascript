// Your task is to write a function called longestConsecutiveSequence that takes a list of numbers as input.

// Your function should find and return the length of the longest consecutive sequence of numbers in the list.



// Example 1:

// Input: [1, 2, 3, 4, 5]

// Output: 5

// In this example, the numbers 1, 2, 3, 4, and 5 form a consecutive sequence, and the length is 5.

// link - https://leetcode.com/problems/longest-consecutive-sequence/description

// Brute force method 

function longestConsecutiveSequence(nums){
    let sortedNums = nums.sort((a,b)=> a-b);
    let maxSize = new Set()
    let tempSize =1
    let prev = sortedNums[0]
    for(let i=1; i< sortedNums.length; i++){
        if(sortedNums[i]-prev>1){
            maxSize.add(tempSize)
            tempSize = 1
            prev = sortedNums[i]
            continue;
        }
        if(i===sortedNums.length-1){
            tempSize+=1
            maxSize.add(tempSize)
            break
        }
        
        prev = sortedNums[i]
        tempSize+=1
    }
    let maxsizeNum = Math.max(...maxSize)
    if(maxsizeNum<0){
        return 0
    }
    return maxsizeNum
}

// alternate without sort

function longestConsecutiveSequence(nums) {
 
    // Create an empty Set to store unique numbers from "nums"
    const numSet = new Set();
 
    // Loop through each number in "nums"
    for (const num of nums) {
 
        // Add each number to "numSet"
        numSet.add(num);
    }
 
    // Initialize a variable to keep track of the longest consecutive sequence
    let longestStreak = 0;
 
    // Loop through each unique number in "numSet"
    for (const num of numSet) {
 
        // Check if the number just smaller than the current number exists
        // If it does not exist, then this number is the start of a new sequence
        if (!numSet.has(num - 1)) {
 
            // Initialize variables to keep track of the current number
            // and the length of the sequence starting from this number
            let currentNum = num;
            let currentStreak = 1;
 
            // Check if the number just greater than the current number exists
            // If it does, extend the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
 
            // Update "longestStreak" if "currentStreak" is longer
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
 
    // Return the length of the longest consecutive sequence
    return longestStreak;
}


