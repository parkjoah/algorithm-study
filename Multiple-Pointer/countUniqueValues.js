// joah
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  let i = 0;
  let j = 1;

  while (j <= arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i;
}

// colt
function countUniqueValues(arr) {
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
