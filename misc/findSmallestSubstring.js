// Given an array of unique characters and a string, implement a function that finds the smallest substring containing all the characters in the array.
// Return "" (empty string) if such a substring doesn’t exist.

// Examples: 

// input:  arr = ['x','y','z'], str = "xyyzyzyx"
// output: "zyx"

// input:  arr = ['x','y','z'], str = "xyyzy"
// output: "xyyz"

function smallestSubstring(arr, s){
  const arrObj = {};
  arr.forEach(char => arrObj[char] = 0);
  let headIdx = 0;
  let result = '';
  let uniqueCounter = 0;
  for (let tailIdx=0; tailIdx<s.length; tailIdx++){
    if (!arrObj.hasOwnProperty(s[tailIdx])){
      continue;
    }
    else{
      if (arrObj[s[tailIdx]]){
        arrObj[s[tailIdx]] = arrObj[s[tailIdx]]+1;
      }
      else{
        uniqueCounter++;
        arrObj[s[tailIdx]] = arrObj[s[tailIdx]]+1;
      }
    }
    while(uniqueCounter===arr.length){
      let currentLength = tailIdx-headIdx+1
      if (currentLength < result.length || !result.length){
        result = s.slice(headIdx, tailIdx+1);
      }
      if (arrObj.hasOwnProperty(s[headIdx])){
        arrObj[s[headIdx]] = arrObj[s[headIdx]]-1;
        if (!arrObj[s[headIdx]]) uniqueCounter--;
      }
      headIdx++; 
    }
  }
  return result;
}
