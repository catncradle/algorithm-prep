// write a function that takes an array of integers and returns a sorted array of the 3 largest integers from the input array, if there are duplicates the duplicates should be included as such [9,9,12] from [9,3,5,2,9,12]

//this function utilizes a sort so it would result in a n log n time
// function findThreeLargestNumbers(array) {
// 	// array = new Set(array)
//   array = [...array].sort((a,b)=>{return a-b})
//   const n = array.length
// 	return [array[n-3],array[n-2],array[n-1]]
// }

//this function uses 2 helper functions and finishes in one pass, resulting in n time
function findThreeLargestNumbers(array) {
  let result = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    updateLargest(result, array[i]);
  }
  return result;
}

function updateLargest(result, num) {
  if (result[2] < num || !result[2]) {
    swapShift(result, num, 2);
  } else if (result[1] < num || ![result[1]]) {
    swapShift(result, num, 1);
  } else if (result[0] < num || !result[0]) {
    swapShift(result, num, 0);
  }
}

//if the indexs match, reassign, otherwise every other index is assigned to the one in front of it,
// we only loop until the index that we specified
function swapShift(result, num, shift) {
  for (let i = 0; i <= shift; i++) {
    if (i === shift) {
      result[i] = num;
    } else {
      result[i] = result[i + 1];
    }
  }
}
