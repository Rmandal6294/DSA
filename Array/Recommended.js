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

//! Given an array of positive integers arr[], return the second largest element from the array. 
//! If the second largest element doesn't exist then return -1.

const secondLargest = (arr) => {
    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondLargest([2, 2, 2, 2, 2])); // Output: -1

//!Given an array arr[], find the first repeating element index. The element should occur more than once and 
//! the index of its first occurrence should be the smallest.

// Note:- The position you return should be according to 1-based indexing. 

const firstRepeated = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return i + 1
            }
        }
    }
    return -1
}
console.log(firstRepeated([1, 8, 3, 8, 5])); // Output: 2
console.log(firstRepeated([1, 2, 3, 4, 5])); // Output: -1

//! Given an array arr of only 0's and 1's. The array is sorted in such a manner that all the 
//!1's are placed first and then they are followed by all the 0's. Find the count of all the 0's.

const countZeros = (arr) => {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            count++;
        }
    }
    return count;
}
console.log(countZeros([1, 1, 1, 0, 0])); // Output: 2
console.log(countZeros([1, 1, 1, 1, 1])); // Output: 0