// Given an array of incrementing numbers starting with 0, find a missing number. 
// If no missing number is found, return the last element incremented by 1
// Assume no more than one number is missing

// Example

// input : [0,1,2,3,4,5,7,8,9,10]
// output : 6

// input : [0,1,2,3,4,5,6,7,8,9,10]
// output : 11


function findMissingNum(arr){
  let i = Math.floor(arr.length/2);
  while (i < arr.length){
    if (i < arr[i]){ // missing number is on the left side
      if (arr[i-1] === i-1) return i;
      else if (i-1 === 0) return 0;
      else i--;
    }
    else if (i === arr[i]){ // no missing number of missing number is on right side
      i++;
    }
  }
  return arr.length //no number is missing
}
