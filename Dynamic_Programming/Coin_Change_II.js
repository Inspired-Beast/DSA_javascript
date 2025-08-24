// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

 

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

// https://leetcode.com/problems/coin-change-ii/solutions/7117659/dp-solution-using-javascript-by-othpsmki-6n5l/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp  = new Array(amount+1).fill(0)
    dp[0] = 1
    // Iterate over all coins
    for(const coin of coins){
        // Iterate over all amount possible to see which values are possible via the coin and cache that in an array
        for(let a=coin; a<=amount; a++){
            // Cummulating values per coin in the memoized array
            dp[a] = dp[a] + dp[a-coin]
        }
    }
    return dp[amount]
};

//Approach

// Initialize a list dp of length amount + 1 with all elements set to 0. This list will be used to store the number of ways to make change for each amount up to amount.

// Set dp[0] to 1. This step accounts for the base case where there's one way to make change for an amount of 0 (using no coins).

// Loop through each coin c in the given list of coins.

// For each coin c, loop through the range of amounts from c to amount + 1.

// Inside the inner loop, update dp[a] by adding the value of dp[a - c] to it. This step represents the dynamic programming recurrence relation, where dp[a] is updated by considering the previous number of ways to make change for amount a - c.

// The nested loops will iteratively fill in the dp array with the number of ways to make change for each amount using the given set of coins.

// After both loops complete, the value at dp[amount] will represent the total number of ways to make change for the given amount using the provided coins.

// Return the value of dp[amount] as the final result.

// In summary, the algorithm uses dynamic programming to calculate the number of ways to make change for the given amount using the provided coins. It iteratively builds up solutions for different amounts by considering the combinations of coins available. The dp array stores intermediate results, allowing the algorithm to efficiently compute the final result.