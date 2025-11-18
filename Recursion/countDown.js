//// countDown - 재귀 사용 O
function countDown(num) {
  if (num <= 0) {
    console.log("all done!");
    retuen;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

//// countDown - 재귀 사용 X
function countDown2(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("all done!");
}

countDown2(5);
