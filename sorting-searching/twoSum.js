// brute force of looping through array, and nested loop where if the nested loop value and top loop value equals target return both in an array
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

function indexOfSum(arr, target) {
  // initialize hash
  let arrInd = {};
  // loop through array making hash where key is number, value is index
  for (let i = 0; i < arr.length; ++i) {
    arrInd[arr[i]] = i;
  }

  let result = [];
  // loop through array again, checking if the key exists, if it does push result into array
  for (let i = 0; i < arr.length; ++i) {
    if (arrInd[target - arr[i]]) {
      result.push([i, arrInd[target - arr[i]]]);
    }
  }
  // return result array where the two values are the two indexes of found values
  return result;
}
