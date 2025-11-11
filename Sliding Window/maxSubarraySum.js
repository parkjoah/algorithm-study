function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
}

//→ 첫번째 전체 sum을 구하고, 빼고 더하는식으로…….

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  let maxSum = sum;
  for (let j = 1; j < arr.length - num + 1; j++) {
    sum = sum - arr[j - 1] + arr[j + num - 1];
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
