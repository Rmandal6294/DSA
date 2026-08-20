//! You are given an array arr[], the task is to return a list elements of arr in alternate order (starting from index 0)

const alternateOrder = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
};
console.log(alternateOrder([1, 2, 3, 4, 5])); // Output: [1, 3, 5]

//!Given an array, arr[] of n integers, and an integer element x, find whether element x is present in the array. 
//!Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.

const searchElement = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}
console.log(searchElement([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(searchElement([1, 2, 3, 4, 5], 6)); // Output: -1

//! Given an array arr[]. The task is to find the largest element and return it.
const findLargest = (arr) => {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};
console.log(findLargest([1, 2, 3, 4, 5])); // Output: 5

//! You are given an array of integers arr[]. You have to reverse the given array.
//Note: Modify the array in place.

const reverseArray = (arr) => {
    for (let i = arr.length - 1, j = 0; i > j; i--, j++) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

//!Given an array arr[], check whether it is sorted in non-decreasing order. Return true if it is sorted otherwise false.
const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([1, 3, 2, 4, 5])); // Output: false


