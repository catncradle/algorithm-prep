// Given an array of unique characters and a string, implement a function that finds the smallest substring containing all the characters in the array.
// Return "" (empty string) if such a substring doesn’t exist.

function getShortestUniqueSubstring(arr, str) {
  // TODO
}

// Examples:

// input:  arr = ['x','y','z'], str = "xyyzyzyx"
// output: "zyx"

// input:  arr = ['x','y','z'], str = "xyyzy"
// output: "xyyz"

// input: arr = ["A"], str = "B"
// output: ""

// input: arr = ["A"], str = "A"
// output: "A

// input:["A","B","C"] str = "ADOBECODEBANCDDD"
// output:"BANC"

// We scan the input string str from left to right while maintaining two indices - headIndex and tailIndex.

// At each iteration, we examine a temporary substring [str.charAt(headIndex),str.charAt(headIndex+1),..., str.charAt(tailIndex)] and keep a copy of the shortest valid substring we’ve seen so far. Said differently, we keep incrementing tailIndex until the above substring contains every unique character in arr.

// If the size of the resulting substring equals to arr.length then we return it since by definition there can’t be a shorter valid substring (otherwise, it’ll be missing 1 or more unique characters from arr).

// Once we found a valid substring, we increment headIndex as long the substring remains valid. At every increment we also check if the current valid substring is shorter than the previously kept one. If it is, we update result to be the current substring.

// We keep repeating the above steps in a loop until we either reach the end of the input string str or return the shortest valid substring, whichever comes first.

// To examine the validity of str substrings we use 2 counters:

// uniqueCounter (Integer) - the number of unique characters of arr that our current substring contains.
// countMap (Map/Hash Table) - the number of occurrences of each character of arr in our current substring.
