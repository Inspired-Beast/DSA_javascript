

## **Problem Recap**

We are given three strings:

- `s1`
- `s2`
- `s3`

We need to check if `s3` can be formed by **interleaving** `s1` and `s2` — meaning we merge them while **preserving the order** of characters from each string.

**Rule:** Characters from `s1` and `s2` must appear in the same order as in their respective strings, but can be mixed together.

💡 Quick sanity check:

```js
if (s1.length + s2.length !== s3.length) return false;
```

If lengths don’t add up, an interleaving is impossible.

***

## **Approach 1 — Naive Recursion (Brute Force)**

### **Idea**

- At each step in s3, choose to take the next character from s1 or s2 (if it matches).
- Recursively check if the rest can be formed.
- If both strings are fully consumed when we reach the end of s3, return `true`.

 At position k=i+j in s3, try to match:
    - s1[i] with s3[k] → recurse to (i+1, j)
    - s2[j] with s3[k] → recurse to (i, j+1)
- If both i and j finish at the end when k reaches s3.length, return true.

**Why slow?**

- Explores all possible ways, recomputing many overlapping subproblems.
- Time complexity is **exponential**.


### **Code**

```js
function isInterleaveRec(s1, s2, s3) {
  const m = s1.length, n = s2.length;
  if (m + n !== s3.length) return false;

  function dfs(i, j) {
    if (i === m && j === n) return true;
    const k = i + j;

    if (i < m && s1[i] === s3[k] && dfs(i + 1, j)) return true;
    if (j < n && s2[j] === s3[k] && dfs(i, j + 1)) return true;

    return false;
  }

  return dfs(0, 0);
}
```

**Complexity:**
Time = O(2^(m+n))
Space = O(m+n) recursion stack

***

## **Approach 2 — Recursion + Memoization (Top-Down DP)**

### **Idea**

- State `(i, j)` = we’ve used first `i` letters from s1 and first `j` letters from s2.
- Store computed results so we never re-check the same `(i, j)` combination again.

**Benefit:**

- Turns exponential recursion into polynomial time — **each state computed once**.


### **Code**

```js
function isInterleaveMemo(s1, s2, s3) {
  const m = s1.length, n = s2.length;
  if (m + n !== s3.length) return false;

  const memo = {};

  function dfs(i, j) {
    if (i === m && j === n) return true;

    const key = i + "," + j;
    if (key in memo) return memo[key];

    const k = i + j;
    let ans = false;

    if (i < m && s1[i] === s3[k] && dfs(i + 1, j)) ans = true;
    else if (j < n && s2[j] === s3[k] && dfs(i, j + 1)) ans = true;

    memo[key] = ans;
    return ans;
  }

  return dfs(0, 0);
}
```

**Complexity:**
Time = O(m·n)
Space = O(m·n) for memo + recursion depth

***

## **Approach 3 — Bottom-Up DP (2D Table)**

### **Idea**

- `dp[i][j]` = whether the first `(i+j)` chars of s3 can be formed by first `i` of s1 + first `j` of s2.
- Fill table row by row.

**Transitions:**

- From above (take from s1):
`dp[i][j] = dp[i-1][j] && s1[i-1] === s3[i+j-1]`
- From left (take from s2):
`dp[i][j] = dp[i][j-1] && s2[j-1] === s3[i+j-1]`


### **Code**

```js
function isInterleaveDP(s1, s2, s3) {
  const m = s1.length, n = s2.length;
  if (m + n !== s3.length) return false;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;

  // filling first column values based on s1
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];
  }

  //filling first row values based on s2
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        (dp[i-1][j] && s1[i-1] === s3[i+j-1]) ||
        (dp[i][j-1] && s2[j-1] === s3[i+j-1]);
    }
  }
  return dp[m][n];
}
```

**Complexity:**
Time = O(m·n)
Space = O(m·n)

***

## **Approach 4 — Space-Optimized DP (1D Array)**

### **Idea**

- `dp[j]` holds the current row values.
- Update in place:
    - `dp[j]` (from previous row) = taking from s1
    - `dp[j-1]` (from current row) = taking from s2

**Benefit:**
Memory savings — from O(m·n) to O(n).

**Approach**
This is based on Python. Other might be different a bit.

Initialize dp array: Create an array dp of size (len(s2) + 1) to store whether substrings of s1 and s2 can interleave to form substrings of s3.

Check total length: If the sum of the lengths of s1 and s2 is not equal to the length of s3, return False since it's impossible for s1 and s2 to interleave to form s3.

Initialization: Set dp[0] to True to indicate that an empty s1 and empty s2 can interleave to form an empty s3.

Loop through s1 and s2: Use nested loops to iterate through all possible combinations of substrings of s1 and s2 to check if they can interleave to form s3.

Base cases handling:

If i is 0 and j is 0, it means both s1 and s2 are empty. Set dp[j] to True.
If i is 0, update dp[j] using the previous value of dp[j - 1] and check if the character in s2 at index j - 1 matches the character in s3 at index i + j - 1.
If j is 0, update dp[j] using the current value of dp[j] and check if the character in s1 at index i - 1 matches the character in s3 at index i + j - 1.
General case:

For all other cases (when both i and j are not 0), update dp[j] using the following conditions:
dp[j] should be the result of (dp[j] and s1[i - 1] == s3[i + j - 1]), meaning that the current character in s1 matches the current character in s3, and the previous substring also interleave to form the previous part of s3.
dp[j - 1] should be the result of (dp[j - 1] and s2[j - 1] == s3[i + j - 1]), meaning that the current character in s2 matches the current character in s3, and the previous substring of s2 can interleave to form the previous part of s3.
Return result: The final result is stored in dp[len(s2)], which indicates whether s1 and s2 can interleave to form s3.

The function returns the value of dp[len(s2)] as the final result.

In summary, the algorithm uses dynamic programming to determine whether substrings of s1 and s2 can be interleaved to form substrings of s3. The dp array stores whether the substrings can interleave at each position.

Complexity
Time complexity: O(m * n)
m is the length of string s1 and n is the length of string s2. This is because we iterate through each character of s1 and s2 once while constructing the dynamic programming matrix.

Space complexity: O(n),
n is the length of string s2. We only use a dynamic programming array of length n+1 to store the state transitions.
```js
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    
    const dp = new Array(s2.length + 1).fill(false);
    
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0 && j === 0) {
                dp[j] = true;
            } else if (i === 0) {
                dp[j] = dp[j - 1] && s2[j - 1] === s3[i + j - 1];
            } else if (j === 0) {
                dp[j] = dp[j] && s1[i - 1] === s3[i + j - 1];
            } else {
                dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) || (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
            }
        }
    }
    
    return dp[s2.length];    
};
```

## Visual Mapping: From Recursion Tree to DP Table

Consider:

- s1 = "ab"
- s2 = "xy"
- s3 = "axby"

Indices:

- i in s1 (0..2), j in s2 (0..2), k=i+j in s3 (0..4)

1) Recursion Tree (states are (i,j), label shows char matched)

- Start at (0,0), k=0:
    - Match s1='a' with s3='a' → go to (1,0)
    - Try s2='x' with s3='a' → no
- From (1,0), k=1:
    - Try s1='b' with s3='x' → no
    - Match s2='x' with s3='x' → go to (1,1)
- From (1,1), k=2:
    - Match s1='b' with s3='b' → go to (2,1)
    - Try s2='y' with s3='b' → no
- From (2,1), k=3:
    - s1 done → must match s2='y' with s3='y' → go to (2,2)
- (2,2) reaches end → success

This path corresponds to taking a, x, b, y in order from s1/s2 to form s3.

2) DP Grid Representation (dp[i][j])

Grid coordinates:

- Rows i=0..2 for s1 prefix length
- Columns j=0..2 for s2 prefix length
- dp[i][j] says whether s3[0..i+j-1] is interleavable from s1[0..i-1] and s2[0..j-1]

Filling order and logic:

- dp = true (empty + empty = empty)
- First row (i=0): can only use s2’s prefix to match s3’s prefix
    - dp = dp \&\& s2==s3 → 'x'=='a'? false
    - dp similarly false
- First column (j=0): can only use s1’s prefix
    - dp = dp \&\& s1==s3 → 'a'=='a' → true
    - dp = dp \&\& s1==s3 → 'b'=='x'? false
- Interior:
    - dp = (dp \&\& s1==s3) || (dp \&\& s2==s3)
= (false \&\& 'a'=='x') || (true \&\& 'x'=='x') → true
    - dp = (dp \&\& s1==s3) || (dp \&\& s2==s3)
= (true \&\& 'b'=='b') || (false \&\& ...) → true
    - dp = (dp \&\& s1==s3) || (dp \&\& s2==s3)
= (false \&\& ...) || (true \&\& 'y'=='y') → true

Thus dp = true, matching the successful recursion path.

3) How they correspond:

- Each recursion state (i, j) exactly maps to dp[i][j].
- Recursion explores states in a branching manner; memoization caches those states.
- DP fills the same states systematically by increasing i and j.
- Space-optimized DP preserves the same dependency structure but collapses rows into a single rolling array