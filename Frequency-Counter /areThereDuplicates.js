// 빈도수 세기 - areThereDuplicates
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// 다중포인터로 풀기 - areThereDuplicates
function areThereDuplicates(...args) {
  args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false;
}

// Set 자료구조로 풀기 - areThereDuplicates
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
