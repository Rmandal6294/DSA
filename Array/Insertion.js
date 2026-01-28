import { traverseArray, traverse2DArray } from "./Traversal.js";

//! Insertion in an 1D Array
const insertFromBeginning = (arr, value) => {
    for(let i = arr.length; i > 0; i--) {
        arr[i] =  arr[i - 1];
    }
    arr[0] = value;
}

const insertFromEnd = (arr, value) => {
    arr[arr.length] = value;
}

const insertInPosition = (arr, position, value) => {
    for(let i = arr.length; i >= position; i--) { // for by index i > position
        arr[i] = arr[i - 1];
    }
    arr[position-1] = value; // arr[position] = value; for by index
}


let arr = [3, 5];
traverseArray(arr);

insertFromBeginning(arr, 12);
insertFromBeginning(arr, 15);
traverseArray(arr);

insertFromEnd(arr, 20);
insertFromEnd(arr, 25);
traverseArray(arr);

insertInPosition(arr, 2, 99);
insertInPosition(arr, 4, 100);
traverseArray(arr);

//! Insertion in a 2D Array