/** Class representing a Hash Table */

class HashTable {
    constructor(val) {
        this._storage = [];
        this._tableSize = val;
        this.inputSize = 0; //look into remove method
    }
    /*
     * Inserts a new key-value pair
     * @param {string} key - the key associated with the value
     * @param {*} value - the value to insert
     */
    insert(key, value) {
        const index = this._hash(key, this._tableSize);

        if (!this._storage[index]) {
            this._storage[index] = [];
        }
        //this work like this  [0,0,0,[],0]

        //TODO: loop through array and find if key was alredy inserted
        this._storage[index].push([key, value]);
        //this work like this  [0,0,0,['a', 1],['b', 2],0]
    }
    /*
     * Deletes a key-value pair
     * @param {string} key - the key associated with the value
     * @return {*} value - the deleted value
     */
    remove() {
        // when you insert, if the size is greater than 50% of the lenght of your hash table storage.
        // so if your table size 25, inputSize is 0 and you implement every time.
        // if this is 50% more of your table size than double your table size.
    }
    /*
     * Returns the value associated with a key
     * @param {string} key - the key to search for
     * @return {*} - the value associated with the key
     */
    // HashTable { _storage: [0,0,0,0,['a', 1], ['b', 2]],0,0,0]}
    retrieve(key) {
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];
        
        if (arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                const keyVlaueArray = arrayAtIndex[i];
                if (keyVlaueArray[0] === key) {
                    return keyVlaueArray[1];
                }
            }
        }
    }
    /*
     * Hashes string value into an integer that can be mapped to an array index
     * @param {string} str - the string to be hashed
     * @param {number} n - the size of the storage array
     * @return {number} - an integer between 0 and n
     */
    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

        return sum % n;
    }
}

const myHT = new HashTable(25);
console.log(myHT);
myHT.insert('a', 1);
myHT.insert('b', 2);
console.log(myHT);

//retrive data
console.log(myHT.retrieve('a'));

//look like this
// HashTable { _storage: [0,0,0,0,['a', 1], ['b', 2]],0,0,0]}

// collisions: hash function return some the same index for a dirrerent key.
