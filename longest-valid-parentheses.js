/**
 * Find the length of the longest valid parentheses substring.
 *
 * @param {string} s
 * @returns {number}
 */
function longestValidParentheses(s) {
  let stack = [];
  stack.push(-1);
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        let currentLength = i - stack[stack.length - 1];
        if (currentLength > maxLength) {
          maxLength = currentLength;
        }
      }
    }
  }

  return maxLength;
}

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));
console.log(longestValidParentheses("(()))"));
console.log(longestValidParentheses(")()(()))"));
console.log(longestValidParentheses("()"));
