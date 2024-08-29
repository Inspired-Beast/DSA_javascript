Hash table is a data structure often used to implement the map (a.k.a. dictionary or javascript object) abstract data type. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

NOTE - javascript has its own hash table known as object which can perform features of hash table

So in essence it stores key value pair as shown beloe

key,value ---->  hash function -----> hash(address) where key,value in form of array is stored

it is one way method not two way.

So a collision is when we have an item that maps to that same spot in memory. like lets say we have two items with same key and the respective hash function has now to assign memory to it, this phenomenon is called as collision

There are all kinds of ways of dealing with collisions and a hash table. 
The two most common are going to be -
1. linear probing( checking and providing adjacent memory spaces to colliding key value pairs). it is also called as open addressing.

2. separate chaining (storing different values sperately mabe in form of multiple items in an array as [(key1,value1), (key1, value2)]).

In upcoming codes we will be using seperate chaining methodology.

The seperate chaining can be either implemented using arrays  to store multiple key value pairs or use linked lists to store them.

-------------------------------------------Hash table constructor------------------------------------

* Points to note:

a. The main ingredient or function in a hash table is hash function which if we are construction a class has is preferred to be a prvate function. this hash function gives out memory address based on key provided. 

b. But note that whatever hash function you make it has to return a value that is within the confines of the memory table or length of array in our case meaning if we defined length of array to be 7 then the hash function return value should be between 0 to 6.

c. Also if you want more randomization then use prime numbers as they give more randomization.


Hash Table BigO

as average it is O(1) but in case lets say hash table which is not having much suffiecient array structure of hash function can have big O of O(n)