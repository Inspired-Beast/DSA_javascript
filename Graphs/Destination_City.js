// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are: 
// "D" -> "B" -> "C" -> "A". 
// "B" -> "C" -> "A". 
// "C" -> "A". 
// "A". 
// Clearly the destination city is "A".

// Example 3:

// Input: paths = [["A","Z"]]
// Output: "Z"
 
// Example 4:
// paths =
// [["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]
// output : "wxAscRuzOl"

var destCity = function(paths) {
    let destination = ""
    let adjacencyList = {}
    for(let i=0; i<paths.length; i++){
        if(!adjacencyList[paths[i][0]]){
            adjacencyList[paths[i][0]] = paths[i][1]} // adding source with destination as key value resp
    }
    for(let i of Object.values(adjacencyList)){
        if(!adjacencyList.hasOwnProperty(i)){ //  checking if value which is destination is source or key
            return i
        }
    }

    return "destination"
};