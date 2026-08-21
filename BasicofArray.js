//! ================= Creating array =================
let numbers = ["HTML", "CSS", "JS"];
// Creating and Initializing an array with values
let a = new Array(10, 20, 30);

// Accessing Array Elements
console.log(a[0]);
console.log(a[1]);
console.log(numbers[1]);

// Add Element to the end of Array
a.push("Node.js");

// Add Element to the beginning
a.unshift("Web Development");

console.log(a)

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);


// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"]

// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)

