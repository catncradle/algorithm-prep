// Array Index & Element Equality
// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

// Examples:

// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i]

function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  //as long as the start is greater or equal to the end keep this search running
  while (start <= end) {
    //find the midpoint
    let i = Math.round((start + end) / 2);
    // if the element at the index subtracted by the index is less than zero, close off left side
    if (arr[i] - i < 0) {
      start = i + 1;
    }
    // if the thing subtracted is equal to zero, and if i is 0, or some other stuff return the i
    else if (
      arr[i] - i == 0 &&
      //this statement makes sure that we're done chopping the thing in half, and checks the element before to see if it matches, meaning the first occurence of the match will be the one returned
      (i == 0 || arr[i - 1] - (i - 1) < 0)
    ) {
      return i;
    }
    // otherwise it's bigger and close in the right
    else {
      end = i - 1;
    }
  }
  return -1;
}

indexEqualsValueSearch([-5, 0, 2, 3, 10, 29]); //==> 2
indexEqualsValueSearch([-10, 0, 1, 2, 4, 5]); //==> 4
indexEqualsValueSearch([-10, -3, -2, 1, 2, 5]); // ==> 5
indexEqualsValueSearch([-1, 1]); // ==> 1
