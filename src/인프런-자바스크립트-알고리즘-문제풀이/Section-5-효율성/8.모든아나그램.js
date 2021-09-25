/*
모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
▣ 입력예제 1 
bacaAacba
abc
▣ 출력예제 1
3
출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
*/
export function solution_모든아나그램(s, t) {
  let answer = 0;

  const tMap = new Map();
  for (const char of t) {
    tMap.has(char) ? tMap.set(tMap.get(char) + 1) : tMap.set(char, 1);
  }

  for (let i = 0; i < s.length - t.length + 1; i++) {
    const sMap = new Map();

    for (let j = i; j < t.length + i; j++) {
      sMap.has(s[j]) ? sMap.set(s[j], sMap.get(s[j]) + 1) : sMap.set(s[j], 1);
    }

    if (compareMaps(sMap, tMap)) answer++;
  }

  return answer;
}

export function solution_모든아나그램_two_pointer(s, t) {
  let answer = 0;

  const tMap = new Map();
  for (const char of t) {
    tMap.has(char) ? tMap.set(tMap.get(char) + 1) : tMap.set(char, 1);
  }

  const sMap = new Map();
  for (let i = 0; i < t.length - 1; i++) {
    sMap.has(s[i]) ? sMap.set(sMap.get(s[i]) + 1) : sMap.set(s[i], 1);
  }

  let p1 = 0;

  for (let p2 = t.length - 1; p2 < s.length; p2++) {
    sMap.has(s[p2]) ? sMap.set(s[p2], sMap.get(s[p2]) + 1) : sMap.set(s[p2], 1);

    if (compareMaps(sMap, tMap)) answer++;

    sMap.get(s[p1]) === 1 ? sMap.delete(s[p1]) : sMap.set(s[p1], sMap.get(s[p1]) - 1);
    p1++;
  }

  return answer;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (const [sKey, sValue] of map1) {
    if (!map2.has(sKey) || map2.get(sKey) !== sValue) {
      return false;
    }
  }
  return true;
}
