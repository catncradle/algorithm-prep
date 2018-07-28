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

// Single loop with memoized set, works on unsorted arrays
function twoSum(numbers,target){
  // Create empty set
  let compliments = new Set();

  for(let i = 0; i < numbers.length; i++) {
    if(compliments.has(numbers[i])){
      // Return true if current number in array is compliment to previous number
      return true
    } else {
      // Add compliment of current number to the set
      compliments.add(target - numbers[i])
    }
  }
  // Return false by default
  return false
}
