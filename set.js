//! A Set in JavaScript is a collection of unique values.

// using array
const set1 = new Set([10, 30, 10, 30, 40, 10, 50]);
console.log(set1) // {10, 30, 40, 50}

const set2 = new Set(["gfg", "gtf", "ght", "ght", "gfg"])
console.log(set2) // { 'gfg', 'gtf', 'ght' }

// using String
let set3 = new Set("fooooood");
console.log(set3) // { 'f', 'o', 'd' }

//an empty set
let set4 = new Set();
console.log(set4) // {}

// ===== Recommended DSA Problems ==========

//! Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

const isSubset = (a, b) => {
    let freq = new Map();

    // Count elements of a
    for (let x of a) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    // Check elements of b
    for (let x of b) {
        if (!freq.has(x) || freq.get(x) === 0) {
            return false;
        }

        freq.set(x, freq.get(x) - 1);
    }

    return true;
}
console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7])) // true
console.log(isSubset([2, 2], [2, 2, 2])) // false

//! Given two arrays a[] and b[], check if they are disjoint, i.e., there is no element common between both the arrays. 
//! Return true if if they are disjoint, otherwise, false.
const areDisjoint = (a, b) => {
    let set1 = new Set(a);

    for (let i of b) {
        if (set1.has(i)) {
            return false;
        }
    }

    return true;
}
console.log(areDisjoint([2, 34, 11, 9, 3], [2, 1, 3, 5])) // false
console.log(areDisjoint([2, 34, 11, 9, 3], [1, 5, 7, 13])) // true

//! You are given two arrays a[] and b[], return the Union of both the arrays in any order.

//! The Union of two arrays is a collection of all distinct elements present in either of the arrays. If an element appears more 
//! than once in one or both arrays, it should be included only once in the result.

const findUnion = (a, b) => {
    let set1 = new Set();

    for (let x of a) {
        set1.add(x)
    }

    for (let x of b) {
        set1.add(x)
    }

    return [...set1]
}
console.log(findUnion([1, 2, 2, 3, 1, 4], [4, 5, 4, 3, 2])) // [ 1, 2, 3, 4, 5 ]

//! Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to 
//! be elements that are common in both the arrays. The intersection should not have duplicate elements and the result may contain 
//! elements in any order.

const findIntersection = (a, b) => {
    let set1 = new Set(a);
    let set2 = new Set(b);
    let result = [];

    for (let x of set2) {
        if (set1.has(x)) {
            result.push(x);
        }
    }

    return result;
}
console.log(findIntersection([1, 2, 1, 3, 1], [3, 1, 3, 4, 1])) // [1, 3]

//! Given an array arr[] of integers and another integer target. Determine if there exist two distinct indices such that 
//! the sum of their elements is equal to the target.

const equalToTarget = (arr, target) => {
    let set = new Set()

    for(let x of arr){
        let need = target - x;

        if(set.has(need)){
            return true
        }

        set.add(x)
    }
    return false
}
console.log(equalToTarget([1, 2, 4, -1, 5], 9)) // true (4+5=9)
console.log(equalToTarget([1, 2, 4, -1, 5], 0)) // true (1-1=0)
