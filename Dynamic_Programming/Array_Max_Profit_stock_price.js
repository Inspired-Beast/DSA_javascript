// The function maxProfit aims to find the maximum profit one could achieve by buying and selling a stock once, given an array of stock prices (prices).

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Constraints:

// The array can be empty or contain any number of elements.

// The elements in the array are non-negative integers, representing the stock prices.

// You must buy before you can sell the stock.



// Parameters:

// prices: An array of integers representing stock prices.



// Returns:

// The function returns the maximum profit achievable by buying and selling a stock once.

// If no profit can be made, the function returns 0.

// If the array is empty, the function also returns 0.



// Examples:

// Basic Example

// let prices = [7, 1, 5, 3, 6, 4];
// let result = maxProfit(prices);
// // The function should return 5
// // Buy at price 1 and sell at 6 to achieve a maximum profit of 5.
// Array with Decreasing Prices

// let prices = [5, 4, 3, 2, 1];
// let result = maxProfit(prices);
// // The function should return 0
// // No profit can be made in this case.

function maxProfit(prices){
    let min = prices[0] ||  0;
    let max = 0;
    
    for(let i=1; i<prices.length; i++){
        if(prices[i]<min){
            min = prices[i]
        }
        if(prices[i] >max && prices[i]> min){
            max = prices[i]
        }
    }
    if(max> min && max >0 && min >0)return max -min
    return 0
}

// ------------------------------------------------------------------------------------------
//approach using Math.min and Math.max

// (an array of stock prices).
function maxProfit(prices) {
 
    // Initialize 'minPrice' to the largest possible value in JavaScript.
    // This variable will store the lowest stock price seen so far.
    let minPrice = Number.MAX_VALUE;
 
    // Initialize 'maxProfit' to 0.
    // This variable will store the highest profit we can make.
    let maxProfit = 0;
 
    // Start a for loop that iterates through each stock price in the array.
    for (let price of prices) {
 
        // Update 'minPrice' with the minimum of the current 'minPrice'
        // and the current stock price.
        minPrice = Math.min(minPrice, price);
 
        // Calculate the profit if we buy at 'minPrice' and sell at the current price.
        let profit = price - minPrice;
 
        // Update 'maxProfit' with the maximum of the current 'maxProfit'
        // and the calculated profit.
        maxProfit = Math.max(maxProfit, profit);
    }
 
    // After the loop, 'maxProfit' will contain the highest profit we can make.
    // Return this value.
    return maxProfit;
}


// Sliding window approach
var maxProfit = function(prices) {
    let max = 0
    let left = 0
    let right = 1
    while(right<prices.length){
        while(prices[right]<prices[left]){
            left++
        }
        max = Math.max(max, prices[right] - prices[left])
        right++
    }
    return max
};