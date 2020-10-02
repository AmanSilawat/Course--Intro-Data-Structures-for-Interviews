/** Class representing a Stack. */

class Stack {
    constructor() {
        this._storage = {};
        this._lenght = 0;
    }
    /*
     * Adds a new value at the end of the stack
     * @param {*} value the value to push
     */
    push(value) {
        this._storage[this._lenght] = value;
        this._lenght++;
    }

    /*
     * Removes the value at the end of the stack and returns it
     * @return {*} the last and newest value in the stack
     */
    pop() {
        //edge case
        if(this._lenght) {
            const lastVal = this._storage[this._lenght - 1];
            delete this._storage[this._lenght - 1];
            this._lenght--;
            return lastVal;
        }
    }
    /*
     * Returns the value at the end of the stack without removing it
     * @return {*} the last and newest value in the stack
     */
    peek() {
        if(this._lenght) {
            return this._storage[this._lenght - 1];
        }
    }
}

const myStack = new Stack();
myStack.push('one');
myStack.push('two');

console.log(myStack); // Stack {_storage: {…}, _lenght: 2}
console.log(myStack.pop()); //two
console.log(myStack.peek(0)); //one