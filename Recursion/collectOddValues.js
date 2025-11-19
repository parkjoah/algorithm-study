// Helper Method Recursion : 외부함수안에 재귀함수가 존재
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helpereInput.slice(1));
  }
  helper(arr);
  return result;
}

// 순수 재귀
function collectOddValues2(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
}
