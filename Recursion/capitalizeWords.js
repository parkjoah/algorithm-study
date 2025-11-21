function capitalizeWords(arr) {
  if (arr.length === 0) return [];

  let firstWord = arr[0].toUpperCase();
  return [firstWord].concat(capitalizeWords(arr.slice(1)));
}
