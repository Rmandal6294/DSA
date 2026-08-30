// A Queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are inserted at the rear and removed from the front.

class Queue {
    constructor(capacity){
        this.items = []
        this.front = 0; // front of the array
        this.rare = 0; // end of the array
        this.capacity = capacity; 
    }

    size() {
        return this.rare - this.front
    }
    
    isFull() {
        return this.size() === this.capacity
    }

    isEmpty() {
        return this.size === 0
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue Overflow !")
            return
        } 

        this.items[this.rare] = element
        this.rare++;

        console.log(`Enqueue Completed, Element ${element}`)
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is already Empty!");
            return
        }

        const deletedItem = this.items[this.front];
        this.front++;

        console.log(`Dequeue the ${deletedItem}`)
    }

    peek() {
        if(this.isEmpty()) {
            console.log("Queue is Empty!");
            return
        }

        console.log(`The peek / Front item is ::-> ${this.items[this.front]}`)
    }

    getRare() {
        if(this.isEmpty()) {
            console.log("Queue is Empty!");
            return
        }

        console.log(`The rare / End item is::->  ${this.items[this.rare - 1]}`)
    }

    showQueue() {
         if(this.isEmpty()) {
            console.log("Queue is Empty!");
            return
        }
       
        console.log("\nThe Queue [")
        for(let i = this.front; i < this.rare; i++) {
            console.log(" " + this.items[i])
        }
        console.log("]\n")
        
    }
}

const myQueue = new Queue(5)

// enter a element at last of the array
myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(40)
myQueue.enqueue(16)
myQueue.enqueue(13)

myQueue.showQueue()

myQueue.enqueue(56)
myQueue.dequeue()
myQueue.dequeue()

myQueue.showQueue()

myQueue.peek()
myQueue.getRare()

// =========== Recommended DSA Problem =========

//! Implement a Stack using Queue data structure, this stack has no fixed capacity and can grow dynamically until memory is available.
//! The Stack must support the following operations:

// (i) push(x): Insert an element x at the top of the stack.
// (ii) pop(): Remove the element from the top of the stack, if stack is empty do nothing.
// (iii) top(): Return top element if not empty, else -1.
// (iv) size(): Return the number of elements currently in the stack.

class StackByQueue {
    constructor() { this.q = []; }

    push(x) {
        this.q.push(x)
        let size = this.q.length;
        
        while(size > 1){
            this.q.push(this.q.shift())
            size--;
        }
    }

    pop() {
        if (this.q.length === 0) return;
        this.q.shift()
    }

    top() {
        if (this.q.length === 0) return -1;
        return this.q[0]
    }

    size() {
        return this.q.length
    }
}

console.log("-----------------------------------------")

const myStack = new StackByQueue
myStack.push(12)
myStack.push(13)
myStack.push(14)

console.log("Top:->", myStack.top())
console.log("size:->", myStack.size())

myStack.pop()

console.log("Top:->", myStack.top())
console.log("size:->", myStack.size())

//!Given an array arr[] of positive integers and an integer k. Find the maximum value for each contiguous subarray of size k.
// Return an array of maximum values corresponding to each contiguous subarray.

const maxOfSubArrays = (arr, k) => {
    const result = [];
    const deque = []; // stores INDICES, values in decreasing order

    for (let i = 0; i < arr.length; i++) {
        // Remove indices that are out of this window's range
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove indices whose values are smaller than current — they can never be the max
        while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
            deque.pop();
        }

        deque.push(i);

        // Once we've processed at least k elements, record the max (front of deque)
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}
console.log("-----------------------------------------")
console.log(maxOfSubArrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 3))