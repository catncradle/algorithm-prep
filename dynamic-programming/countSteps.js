// a child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

// there are 3 possible last steps, 3 steps away, 2 steps away and 1 step away, with this we can implement a fibonacci type solution

function countSteps(n) {}

countSteps(100);

// memo = memo || {};

// if (memo[num]) return memo[num];
// if (num <= 1) return 1;

// return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
