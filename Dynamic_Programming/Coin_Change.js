// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// link - https://leetcode.com/problems/coin-change/description/

//solution - https://www.youtube.com/watch?v=-NTaXJ7BBXs

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(!amount){
        return 0
    }
    let result = new Array(amount+1).fill(-1) // memoized array that stores all the results till the amount so if amount is 5 then till 0 1 2 3 4 5
    result[0] = 0 // initializing 0

    function minCoins(target, coins, result){
        let count = Infinity // keeping count to max
        if(target===0) return 0
        for(let i=0; i<coins.length; i++){
            if(target -coins[i]>=0){ 
                let tempCount = 0

                if(result[target-coins[i]]!==-1){
                    tempCount = result[target-coins[i]] // incase we have value already for the new target we will use that and will not recurse further
                }
                else{
                    tempCount = minCoins(target-coins[i], coins, result) // recursing one step below 
                }

                if(tempCount!==Infinity && tempCount+1<count){ // adding the amount of coins added
                count = tempCount +1
                }
            }          
        }
        return result[target] = count
    }
    minCoins(amount, coins, result)
    return result[amount] !== Infinity ? result[amount]: -1
    
};