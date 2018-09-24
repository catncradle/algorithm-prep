// input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                 'm', 'a', 'k', 'e', 's', '  ',
//                 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

// output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//           'm', 'a', 'k', 'e', 's', '  ',
//           'p', 'e', 'r', 'f', 'e', 'c', 't' ]

// Sentence Reverse
// You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

//the approach is the reverse the whole array, then reverse the individual words, finding the words with conditionals.
function reverseWords(arr) {
  //we reverse the whole array.
  reverseInWindow(arr, 0, arr.length - 1);
  //we find a previous space, getting the start of a word.
  let previousSpace = -1;
  for (let i = 0; i < arr.length; i++) {
    //here as we loop through the array, as soon as we find an empty space we reverse from +1 of the previous space (the beginning)
    // and i-1(end of the word)
    if (arr[i] === " ") {
      reverseInWindow(arr, previousSpace + 1, i - 1);
      previousSpace = i;
    } else if (i === arr.length - 1 && i > previousSpace) {
      //else we reach the end and as long as the index is greater than the previousSpace, reversing the final word, or if it's a singular
      //word
      reverseInWindow(arr, previousSpace + 1, i);
    }
  }
  return arr;
}

//an elegant reverse function, the commented out thing is the traditional swapping algorithim.
function reverseInWindow(arr, leftIdx, rightIdx) {
  while (leftIdx < rightIdx) {
    //let temp = arr[leftIdx];
    //arr[leftIdx] = arr[rightIdx];
    //arr[rightIdx] = temp;
    [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
    leftIdx++;
    rightIdx--;
  }
}

module.exports = reverseWords;
