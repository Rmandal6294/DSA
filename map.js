//! A Map in JavaScript is a collection of key-value pairs

// create a map
let myMap = new Map();

//Insert/ Add element
myMap.set('name', 'Ranit');
myMap.set('age', 21);
myMap.set('collage', 'Sanaka')

//Access
console.log(myMap)

//update value
myMap.set('age', 32)
console.log('After Update :->', myMap)

//check if a keys exist
console.log("Has 'city' key -> ", myMap.has('city')); // false
console.log("Has 'collage' key -> ", myMap.has('collage')); // true

//Get a value
console.log("name = ", myMap.get("name"))
console.log("age = ", myMap.get("age"))

// Delete a key
myMap.delete('collage')
console.log("After delete collage - > ", myMap)

// Get size of the Map
console.log("Map size:", myMap.size);

// Using Map with initial values
let anotherMap = new Map([
    ['name', 'Ranit mandal'],
    ['age', 21],
    ['city', 'Durgapur']
]);
console.log("Another Map:", anotherMap);

// ================ Recommended DSA Problem =-====

//! Given an array of integers, arr[]. Find if there is a subarray (of size at least one) with 0 sum. Return true/false depending 
//! upon whether there is a subarray present with 0-sum or not

const subArrayWith0Sum = arr => {
    let myMap = new Map()
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (sum === 0) {
            return true
        }

        if (myMap.has(sum)) {
            return true
        }

        myMap.set(sum, i)
    }
    return false

}
console.log(subArrayWith0Sum([4, 2, -3, 1, 6]))// true
console.log(subArrayWith0Sum([4, -3, 1, 6]))// false

//! Given an array arr[] containing integers and an integer k, your task is to find the length of the longest 
//! subarray where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, 
//! return 0.

const longestSubArray = (arr, k) => {
    let myMap = new Map()
    let sum = 0;
    let length = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (sum === k) {
            length = i + 1;
        }

        if (myMap.has(sum - k)) {
            let size = i - myMap.get(sum - k);
            length = Math.max(length, size)
        }

        if (!myMap.has(sum)) {
            myMap.set(sum, i);
        }

    }
    return length;
}

console.log(longestSubArray([10, 5, 2, 7, 1, -10], 15))

//! Given an array of integers arr[], sort the array according to the frequency of elements, i.e. elements that have higher frequency comes first. 
//! If the frequencies of two elements are the same, then the smaller number comes first.

const sortByFrequency = arr => {
    let freq = new Map();

    for (let x of arr) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }
    arr.sort((a, b) => {
        if (freq.get(a) !== freq.get(b)) {
            return freq.get(b) - freq.get(a);
        }
        return a - b;
    });

    return arr;
}
console.log(sortByFrequency([5, 5, 4, 6, 4]));