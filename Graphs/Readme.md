 Graph Data Structure is a collection of nodes (vertex) connected by edges(connection). It's used to represent relationships between different entities.

 Graphs connections or edges can be unidirectional or bi directional.

 Tree is a type of graph in which conections are unidirection in they can go in one direction only.

 So there are a couple of ways we can store a graph. One is an adjacency matrix and the other is an adjacency list.

 and representation in adjacency list is simpler as compared to adjacency matrix hence we will use that in this exercise.

 Adding vertex in adjacency list is easier as for list they are in form of object and we just add a new key there, but in matrix we need to add new row and column in matrix.

 hence for adjaceney matrix its = O(V^2) and for list = O(v + e)

 for adding edge in both its - 
 O(1) as it is only changing a

 for removing edge on adjacency list its O(|Edge|) and on matrix its O(1)

In essence sometime adjacency list method has advantage and sometimes adjacency matrix, but in nutshell list is easier to code and use.


Graph construction and adding vertex

Since we are using adjacency list method hence our class would like something like this 

{
    A: [] // where A is a vertex
}
note our add vertex function should not allow duplicate of vertices

also lets say we have two vertices A and B
and with their bidirectional connection / edge it will look like this

{
    A: ['B'],
    B: ['A']
}



