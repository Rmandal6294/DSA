//! ================= Creating array =================
let numbers = ["HTML", "CSS", "JS"];
// Creating and Initializing an array with values
let aii = new Array(10, 20, 30);

// Accessing Array Elements
console.log(aii[0]);
console.log(aii[1]);
console.log(numbers[1]);

// Add Element to the end of Array
aii.push("Node.js");

// Add Element to the beginning
aii.unshift("Web Development");

console.log(aii)

// Creating an Array and Initializing with Values
let ai = ["HTML", "CSS", "JS"];
console.log("Original Array: " + ai);

// Removes and returns the last element
let lst = ai.pop();
console.log("After Removing the last: " + ai);

// Removes and returns the first element
let fst = ai.shift();
console.log("After Removing the First: " + ai);

// Removes 2 elements starting from index 1
ai.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + ai);


// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)

