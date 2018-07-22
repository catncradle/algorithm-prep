// a child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

// there are 3 possible last steps, 3 steps away, 2 steps away and 1 step away, with this we can implement a fibonacci type solution

function countSteps(n) {
  // if we bypassed zero we have overshot and that's not a permutation
  if (n < 0) {
    return 0;
  }
  // once we hit zero we return 1 because we reach a possible combination
  if (n == 0) {
    return 1;
  }
  // each permutation has 3 possible steps, and this is covered by our recursive calls, this is basically fibonacci style.
  return countSteps(n - 3) + countSteps(n - 2) + countSteps(n - 1);
}
// optimized memoization solution
function countSteps(n, memo) {
  memo = memo || {};

  //if we've done this calculation before, return the old result
  if (memo[n]) {
    return memo[n];
  }
  //if we bypass 0, return 0
  if (n < 0) {
    return 0;
  }
  //if we're at 0, we've finished stepping down
  if (n == 0) {
    return 1;
  }
  //return memo[n]
  return (memo[n] =
    countSteps(n - 1, memo) +
    countSteps(n - 2, memo) +
    countSteps(n - 3, memo));
}

countSteps(100);

// memo = memo || {};

// if (memo[num]) return memo[num];
// if (num <= 1) return 1;

// return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
