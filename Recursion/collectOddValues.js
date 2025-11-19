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
