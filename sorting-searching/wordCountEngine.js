// Word Count Engine
// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"],
//           ["get", "1"], ["by", "1"], ["just", "1"] ]

// Input: "To be, or not to be, that is the question:"
// output:[["to","2"],["be","2"],["or","1"],["not","1"],["that","1"],["is","1"],["the","1"],["question","1"]]

function wordCountEngine(document) {
  const hash = {};
  const wordList = document.split(" ");
  let highestCount = 0;

  for (let i = 0; i < wordList.length; i++) {
    word = wordList[i].toLowerCase();
    let clean = word.replace(/[^\w\s]/gi, "");
    hash[clean] && clean.length ? (hash[clean] += 1) : (hash[clean] = 1);
    hash[clean] > highestCount ? (highestCount = hash[clean]) : null;
  }
  // loop through object making an array
  const wordOccur = new Array(highestCount + 1);
  for (let i = 0; i < wordOccur.length; i++) {
    wordOccur[i] = null;
  }

  for (let word in hash) {
    //for the occurence number, we access the index of the 'buckets' array
    let counter = hash[word];
    //the individual bucket is accessed here
    let bucket = wordOccur[counter];
    if (bucket === null) {
      bucket = [];
    }
    bucket.push(word);
    wordOccur[counter] = bucket;
  }
  // loop through array
  const result = [];
  for (let i = wordOccur.length; i >= 0; i--) {
    let bucket = wordOccur[i];
    if (!wordOccur[i]) {
      continue;
    }
    let strNum = i + "";
    for (let j = 0; j < bucket.length; j++) {
      result.push([bucket[j], strNum]);
    }
  }

  return result;
}

wordCountEngine(
  "Practice makes perfect, you'll get perfecT by practice. just practice! just just just!!"
);
