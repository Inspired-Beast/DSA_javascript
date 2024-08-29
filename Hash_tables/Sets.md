Introduction to Sets
A Set is similar to a Map or an Object, except that instead of having key/value pairs, they only have the keys but not the values.

Sets store a collection of unique elements (in other words, they do not allow duplicates).

In JavaScript, you can use the Set object to create and work with sets.



Here's a simple example to create a set:

// Create a new set
let mySet = new Set();
 
// Add elements to the set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);


Once you've created a set, you can do various things with it, like adding or removing elements and checking if a particular element exists in the set.

Here are some examples of common set operations in JavaScript:

// Add an element to the set
// If the number 6 is already in the set, it won't be added again.
mySet.add(6);
 
// Remove an element from the set
mySet.delete(3);
 
// Clear all elements from the set
// mySet.clear();
 
// Check if an element exists in the set
if (mySet.has(4)) {
    console.log("Found 4 in mySet");
}
 
// Size of the set
console.log(mySet.size);


You can also do more advanced operations like converting sets to arrays and vice-versa, or iterating through sets:

// Convert set to an array
let myArray = Array.from(mySet);
 
// Convert array to a set
let arrayToSet = new Set(myArray);
 
// Iterate through the set
mySet.forEach(function(value) {
    console.log(value);
});