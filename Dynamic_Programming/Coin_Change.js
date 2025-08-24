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


// Recursion+memoizastion+iteratng over coins changes

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

                if(tempCount!==Infinity && tempCount+1<count){ // adding the min amount of coins added
                count = tempCount +1
                }
            }          
        }
        return result[target] = count
    }
    minCoins(amount, coins, result)
    return result[amount] !== Infinity ? result[amount]: -1
    
};


// iteration over amount + memoization
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0

    for(let i=1; i< amount+1; i++){
        for(let j=0; j<coins.length; j++){
            if(i-coins[j]>=0){
                dp[i] = Math.min(dp[i], 1+ dp[i-coins[j]])
            }
        }
    }
    return dp[amount] !== amount +1 ? dp[amount ]: -1
};

/**
 * Step by Step Algorithm

Initialize min_coins array:
Create an array min_coins of length amount + 1, initialized with each element set to amount + 1.
Set min_coins[0] to 0, as it takes zero coins to make up an amount of zero.
min_coins = [amount + 1] * (amount + 1)
min_coins[0] = 0
Iterate over each amount:
Start a loop from 1 to amount (inclusive) to represent each amount from 1 to amount.
For each amount i, iterate over each coin denomination c in the coins list.
for i in range(1, amount + 1):
    for c in coins:
Calculate the minimum number of coins:
Check if the current amount i minus the coin denomination c is greater than or equal to 0.
If it is, update min_coins[i] to the minimum of its current value and 1 + min_coins[i - c].
1 + min_coins[i - c] represents taking one coin of denomination c and the minimum number of coins required to make up the remaining amount i - c.
if i - c >= 0:
    min_coins[i] = min(min_coins[i], 1 + min_coins[i - c])
Return the result:
After updating min_coins for all amounts from 1 to amount, return min_coins[-1] if it's not equal to amount + 1.
If min_coins[-1] is still amount + 1, it means the amount cannot be made up by any combination of coins, so return -1.
return min_coins[-1] if min_coins[-1] != amount + 1 else -1
This algorithm uses dynamic programming to compute the minimum number of coins required to make up each amount from 1 to amount, ultimately providing the minimum number of coins required to make up the total amount.
 */