//! You are given a string s, and your task is to reverse the string.

const reverseString = str => {

    let arr = str.split("");

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }

    return arr.join("")
}
console.log(reverseString("Ranit")) // tinaR

//! Given a non-empty sequence of characters s, return true if sequence is Binary, else return false.

const isBinary = s => {
    let arr = s.split("")

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) > 1) {
            return false
        }
    }
    return true
}
console.log(isBinary("100011110")) // true
console.log(isBinary("011020301")) // false

//! Given a sentence s, your task is to remove all spaces and convert it to Camel Case. In Camel Case, 
//! words are joined without spaces, the first word keeps its original case, and each subsequent word starts with an uppercase letter.

const convertCamelCase = s => {
    let str = s.split("");

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            str[i + 1] = str[i + 1].toUpperCase()
        }
    }

    return str.join("").replaceAll(" ", "")
}
console.log(convertCamelCase("i am ranit")) //iAmRanit
console.log(convertCamelCase("i am a computer science and engineering student")) //iAmAComputerScienceAndEngineeringStudent

//! Given a string s, check if it is a "Panagram" or not.  A "Panagram" is a sentence containing every letter in the English 
//! Alphabet either in lowercase or Uppercase.

const checkPangram = (s) => {
    let set = new Set();

    for (let char of s.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            set.add(char);
        }
    }

    if (set.size === 26) return true
    else return false
}
console.log(checkPangram("Bawds jog, flick quartz, vex nymph")) //true
console.log(checkPangram("abcd ghtyui oiyuht")) // false

//! Given a string s, return true if the string is a palindrome. Otherwise, return false.

const isPalindrome = s => {
    let arr = s.split("");

    let i = 0;
    let j = arr.length - 1

    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false
        }
        i++
        j--
    }

    return true
}
console.log(isPalindrome("abba")) // true
console.log(isPalindrome("eye")) //true
console.log(isPalindrome("Ranit")) // false

