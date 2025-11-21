// 앞에서
function capitalizeFirst(arr) {
  if (arr.length === 0) return [];

  const first = arr[0];
  const capitalized = first[0].toUpperCase() + first.slice(1);

  return [capitalized].concat(capitalizeFirst(arr.slice(1)));
}

//뒤에서
function capitalizeFirst(array) {
  if (array.length === 1) {
    let word = array[0];
    return [word[0].toUpperCase() + word.slice(1)];
  }

  const res = capitalizeFirst(array.slice(0, -1));
  const lastWord = array[array.length - 1];
  res.push(lastWord[0].toUpperCase() + lastWord.slice(1));
  return res;
}
