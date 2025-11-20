const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, v) {
  if (arr.length === 0) return false;
  if (v(arr[0])) return true;
  return someRecursive(arr.slice(1), v);
}
