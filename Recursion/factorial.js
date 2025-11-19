// 재귀호출로 팩토리얼
function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

factorial(4);

// 반복문으로 팩토리얼
function factorial2(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

factorial2(4);
