// Recursion is a process in which a function calls itself as a subroutine. This allows the function to be repeated several times, 
// as it can call itself during its execution. Recursion is often used to solve problems that can be broken down into smaller, 
// similar subproblem.

function factorial(n) {
    
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

console.log(factorial(5));


// ============== Recommended DSA Questions ================
//! 1. Print numbers from n to 1 (space separated) without the help of loops.

const printNTo1 = num => {
    if(num === 1) return 1 // base case
    return num + " " + printNTo1(num - 1)
}
console.log(printNTo1(10))

//! 2. Given a number n, return an array containing the first n Fibonacci numbers.
const fibonacciSequence = length => {
    // base case: stop recursion, return the starting array
    if (length === 0) return [];
    if (length === 1) return [0];
    if (length === 2) return [0, 1];

    // recursive case: build the sequence for length-1, then add the next term
    const res = fibonacciSequence(length - 1);
    res.push(res[res.length - 1] + res[res.length - 2]);
    return res;
};

console.log(fibonacciSequence(5));

//! 3. You are given n disks placed on a starting rod (from), with the smallest disk on top and the largest at the bottom.
// ! There are three rods: the starting rod(from), the target rod (to), and an auxiliary rod (aux).
// You have to calculate the minimum number of moves required to transfer all n disks from the starting rod to the target rod, following these rules:
//       1. Only one disk can be moved at a time.
//       2. A disk can only be placed on top of a larger disk or on an empty rod.
// Return the minimum number of moves needed to complete the task.

const towerOfHanoi = (n, from, to, aux) => {
    if (n === 0) {
        return 0;
    }

    return towerOfHanoi(n - 1, from, aux, to) + 1 + towerOfHanoi(n - 1, aux, to, from);
}

console.log(towerOfHanoi(3))