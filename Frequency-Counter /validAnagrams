function validAnagram1(str1, str2) {
  // 길이가 다른경우
  if (str1.length !== str2.length) return false;
  // 각 count 객체 생성
  const count1 = {};
  const count2 = {};
  // 각 char 갯수 세기
  for (var char of str1) {
    count1[char] = count1[char] ? count1[char] + 1 : 1;
  }
  for (var char of str2) {
    count2[char] = count2[char] ? count2[char] + 1 : 1;
  }
  //비교하기
  for (let key in count1) {
    if (!(key in count2)) return false;
    if (count1[key] !== count2[key]) return false;
  }
  return true;
}

////

function validAnagram2(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false;
    else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
