function solution(s) {
  const str = s.split("");

  let stack = [];
  for (let i = 0, len = str.length; i < str.length; i++) {
    if (str[i] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(str[i]);
  }
  return stack.length === 0 ? 1 : 0;
}
