// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True
 
// link - https://leetcode.com/problems/implement-trie-prefix-tree/description

//Solution - 

var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root // add each character to trie
    // add each character to trie
    for(const char of word){
        // if char is undefined in object add it
        if(!node[char]){
            node[char] = {}
        }
        node = node[char] // move on to next node
    }
    node['end'] = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root

    for(const char of word){
        // if char we are looking for undefined, return false
        if(!node[char]){
            return false
        }
        node = node[char] // move on to next node
    }

    return node['end'] || false // if is a word, return true. Else, false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    // shallow copying so that original this.root doesn't change when we traverse or move node by node
    let node = this.root;

    for(const char of prefix){
        // if char undefined, invalid prefix. Does not start with given prefix
        if(!node[char]){
            return false
        }
        node = node[char] // move to next node
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */