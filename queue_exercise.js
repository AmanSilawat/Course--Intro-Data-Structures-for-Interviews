/** Class representing a Queue.
 * @constructor
 */

class Queue {
    constructor() {
        this._storage = {};
        this._lenght = 0;
        this._headIndex = 0;
    }
    /*
     * Enqueues a new value at the end of the queue
     * @param {*} value the value to enqueue
     */
    enqueue(value) {
        //todo: validation

        const lastIndex = this._lenght + this._headIndex;
        this._storage[lastIndex] = value;
        this._lenght++;
    }

    /*
     * Dequeues the value from the beginning of the queue and returns it
     * @return {*} the first and oldest value in the queue
     */
    dequeue() {
        if(this._lenght) {
            const firstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex]
            this._lenght--;
            this._headIndex++;
        }
    }
    /*
     * Returns the value at the beginning of the queue without removing it from the queue
     * @return {*} the first and oldest value in the queue
     */
    peek() {}
}

var myQue = new Queue();
myQue.enqueue('zero')
myQue.enqueue('one')
myQue.dequeue();
myQue.enqueue('two')


console.log( myQue );