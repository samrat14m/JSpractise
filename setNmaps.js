//Q1. You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcdefabccb

// Output:
// abcdef"

const inputStr = "abcdefabccb";

const mySet = new Set(inputStr);

const uniqueStr = [...mySet];
console.log([...mySet].join(""));

//Q2. You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcdefabccb

// Output:
// a=2
// b=3
// c=3
// d=1
// e=1
// f=1

const myMap = new Map();
let str = "abcdefabccb"

for(let i = 0; i<str.length; i++)
{
    let char = str.charAt(i)
    if (myMap.has(char)) 
    {
        let val = myMap.get(char)
        myMap.set(char, val+1)
    } 
    else 
    {
        myMap.set(char, 1)
    }
}
console.log(myMap);