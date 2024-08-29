// Hash table constructor and further code.

class HashTable{
    constructor(size=7){ // prime size 7
        this.dataMap = new Array(size)
    }

    _hash(key){ // hashing function and we use _ before function 
                // to denote the function as private function of the class
                // in reality it is for readability purpose and doesn't make the method private
                // to make private use # instead
        let hash =0;
        for(let i=0; i< key.length; i++){
            hash = (hash + key.charCodeAt(i) *23) % this.dataMap.length  // * 23 making is more randomized
            // modulo by array space length as we want value to be within the range of Array defined
            // key.charCodeAt(i) gives ascii value of the character at the index i of the string key
            // this function will give value 0-6 as per size mentioned in constructor
        }
        return hash
    }

    set(key,value){ // function to add key value pair into the hash table array
        let index = this._hash(key) // generate address/idex of hash table based on key

        if(!this.dataMap[index]){
            this.dataMap[index] = [] // adding empty array to address if it is null
        }
        this.dataMap[index].push([key, value])

        return this
    }

    get(key){ // to get value of particular key
        let index = this._hash(key);
        if(!this.dataMap[index]) return undefined
        else{
            for(let i = 0; i<this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0]===key){
                    return this.dataMap[index][i][1]
                }
            }
        }
    }

    keys(){
        let allkeys = [];
        for(let i=0; i< this.dataMap.length; i++){
            if(this.dataMap[i]){
                for(let j=0; j< this.dataMap[i].length; j++){
                    allkeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allkeys
    }
}

let myHashTable = new HashTable();
myHashTable.set('apple',5)
myHashTable.set('applePIE',5)

console.log(myHashTable.keys())