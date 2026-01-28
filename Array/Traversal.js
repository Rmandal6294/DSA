//! Traversal of an 1D Array
export function traverseArray(arr) {
    process.stdout.write("[\t");
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write( "index(" + i + ")-> Value = " + arr[i].toString()+ "\t");
    }
    process.stdout.write("]\n");
}

//! Traversal of a 2D Array
export function traverse2DArray(arr) {
    console.log("[\t");
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write("\t[");
        for (let j = 0; j < arr[i].length; j++) {
            process.stdout.write( "index(" + i + "," + j + ")-> Value = " + arr[i][j].toString()+ "\t");
              
        }
        process.stdout.write("]\n");
    }
    console.log("]");
}

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];

// traverseArray(arr1);

// console.log("\n");

// traverse2DArray(arr2);