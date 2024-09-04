Link - https://www.geeksforgeeks.org/window-sliding-technique/

What is the Sliding Window Technique?
The sliding window technique is an algorithmic approach that involves iterating over a collection of items with a fixed-size window, where the window slides over the collection from left to right. The technique is particularly useful for solving problems that involve arrays or strings, where we need to find a subarray or substring that meets certain criteria.

How Does the Sliding Window Technique Work?
The sliding window technique involves two pointers: one that points to the beginning of the window and another that points to the end of the window. We start by initializing both pointers to the first element in the collection. We then move the end pointer to the right, while keeping the start pointer fixed. Once the end pointer reaches a certain condition, we move the start pointer to the right and continue the process until we have exhausted the entire collection.

NOTE - Example - in Longest_substring_without Repeatition example

Here in this example we used variable sliding window.

How to use Sliding Window Technique?
There are basically two types of sliding window:

1. Fixed Size Sliding Window:
The general steps to solve these questions by following below steps:

Find the size of the window required, say K.
Compute the result for 1st window, i.e. include the first K elements of the data structure.
Then use a loop to slide the window by 1 and keep computing the result window by window.

2. Variable Size Sliding Window:
The general steps to solve these questions by following below steps:

In this type of sliding window problem, we increase our right pointer one by one till our condition is true.
At any step if our condition does not match, we shrink the size of our window by increasing left pointer.
Again, when our condition satisfies, we start increasing the right pointer and follow step 1.
We follow these steps until we reach to the end of the array.