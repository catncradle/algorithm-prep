// Array Index & Element Equality
// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

// Examples:

// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i]

function indexEqualsValueSearch(arr) {}

indexEqualsValueSearch([-5, 0, 2, 3, 10, 29]); //==> 2
indexEqualsValueSearch([-10, 0, 1, 2, 4, 5]); //==> 4
indexEqualsValueSearch([-10, -3, -2, 1, 2, 5]); // ==> 5
indexEqualsValueSearch([-1, 1]); // ==> 1
