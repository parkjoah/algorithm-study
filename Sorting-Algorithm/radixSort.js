// 자릿수 값
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

// 자릿수
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 최대자릿수
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
