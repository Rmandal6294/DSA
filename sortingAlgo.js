
//! Given an array arr[], check whether it is sorted in non-decreasing order. Return true if it is sorted otherwise false
const isSortedAArray = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSortedAArray([1, 2, 3, 4, 5])); // Output: true
console.log(isSortedAArray([1, 3, 2, 4, 5])); // Output: false

//! Given an array arr[] consisting of only 0's and 1's. Modify the array in-place to segregate 0s onto the left 
//! side and 1s onto the right side of the array.

// type 1 : 
const segregateZerosAndOnesType1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr
}
console.log(segregateZerosAndOnesType1([0, 1, 0, 1, 0])); // Output: [0, 0, 0, 1, 1]
console.log(segregateZerosAndOnesType1([1, 1, 1, 0, 0])); // Output: [0, 0, 1, 1, 1]

// type 2 : two pointer approach
const segregateZerosAndOnesType2 = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] === 0) {
            left++;
        }
        else if (arr[right] === 1) {
            right--;
        }
        else{
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
};
console.log(segregateZerosAndOnesType2([0, 1, 0, 1, 0])); // Output: [0, 0, 0, 1, 1]
console.log(segregateZerosAndOnesType2([1, 1, 1, 0, 0])); // Output: [0, 0, 1, 1, 1]

//! Given an sorted array arr[] of integers. Sort the array into a wave-like array (In Place). In other words, 
//! arrange the elements into a sequence such that : arr[0] ≥ arr[1] ≤ arr[2] ≥ arr[3] ≤ arr[4] ≥ ... and so on. 
//! If there are multiple solutions, find the lexicographically smallest one.

const sortInWaveForm = arr => {
    for (let i = 0; i < arr.length - 1; i += 2) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
}
console.log(sortInWaveForm([1, 2, 3, 4, 5])); // Output: [2, 1, 4, 3, 5]
console.log(sortInWaveForm([10, 90, 49, 2, 1, 5, 23])); // Output: [90, 10, 2, 49, 5, 1, 23]

//! Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order without using any extra space. 
//!Modify a[] so that it contains the first n elements and modify b[] so that it contains the last m elements.

const mergeSortedArrays = (a, b) => {
    let i = 0;
    let j = 0;
    let k = a.length - 1;

    while (i <= k && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else {
            [a[k], b[j]] = [b[j], a[k]];
            k--;
            j++;
        }
    }

    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    return [a, b];
}
console.log(mergeSortedArrays([1, 3, 5, 7], [0, 2, 4, 6])); // Output: [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ] 
console.log(mergeSortedArrays([10, 12], [5, 18, 20])); // Output: [ 5, 10 ], [ 12, 18, 20 ] 

//! Given two sorted arrays a[] and b[], where each array may contain duplicate elements, return the elements in the 
//! intersection of the two arrays in sorted order.

// method 1
const intersectionOfSortedArrays = (a, b) => {
    let c = []
       
       function pushArr(a){
           for(let i = 0; i < c.length; i++){
               if(a == c[i]){
                   return
               }
           }
           c.push(a)
       }
       
       for(let i = 0; i < a.length; i++){
           for(let j = 0; j < b.length; j++){
               if(a[i] == b[j]) {
                   pushArr(a[i])
                   break;
               }
           }
       }
       
       return c
}
console.log(intersectionOfSortedArrays([1, 2, 2, 3], [2, 2, 4])); // Output: [2]
console.log(intersectionOfSortedArrays([1, 1, 2, 3], [1, 2, 2])); // Output: [1, 2]

// method 2
const intersectionOfSortedArraysMethod2 = (a, b) => {
    let c = []
    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else if (a[i] > b[j]) {
            j++;
        }
        else {
            if (c.length === 0 || c[c.length - 1] !== a[i]) {
                c.push(a[i]);
            }
            i++;
            j++;
        }   
    }
    return c;
}

console.log(intersectionOfSortedArraysMethod2([1, 2, 2, 3], [2, 2, 4])); // Output: [2]
console.log(intersectionOfSortedArraysMethod2([1, 1, 2, 3], [1, 2, 2])); // Output: [1, 2]
