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
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    return count;
}
console.log(countZeros([1, 1, 1, 0, 0])); // Output: 2
console.log(countZeros([1, 1, 1, 1, 1])); // Output: 0

//! Given a sorted array arr[] and an integer x, find the index (0-based) of the largest element in arr[] that is 
//! less than or equal to x. This element is called the floor of x. If such an element does not exist, return -1.
//Note: In case of multiple occurrences of floor of x, return the index of the last occurrence

const floorOfX = (arr, x) => {
    let low = 0;
    let high = arr.length - 1;
    let floorIndex = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) {
            floorIndex = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return floorIndex;
};
console.log(floorOfX([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(floorOfX([1, 2, 3, 4, 5], 0)); // Output: -1

//! Given an array of integers arr[] that is first strictly increasing and then maybe strictly decreasing, 
//! find the bitonic point, that is the maximum element in the array. Bitonic Point is a point before which elements are strictly 
//! increasing and after which elements are strictly decreasing.
// Note: It is guaranteed that the array contains exactly one bitonic point.

const bitonicPoint = arr => {
    let bitonicPoint = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            bitonicPoint = arr[i + 1]
        }
    }
    return bitonicPoint
}
console.log(bitonicPoint([1, 3, 6, 8, 4, 2, 1])) // Output: 8
console.log(bitonicPoint([120, 100, 80, 20, 0])) // Output: 120