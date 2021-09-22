/*
뒤집은 소수
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 100,000를 넘지 않는다.
▣ 출력설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
▣ 입력예제 1 
9
32 55 62 20 250 370 200 30 100
▣ 출력예제 1
23 2 73 2 3
*/
export function solution_뒤집은소수(arr) {
  let answer = [];

  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let reversedNum = 0;

    while (num > 0) {
      reversedNum = reversedNum * 10 + (num % 10);
      num = parseInt(num / 10);
    }

    if (isPrime(reversedNum)) {
      answer.push(reversedNum);
    }
  }

  return answer;
}

export function solution_뒤집은소수_Eratosthenes(arr) {
  let answer = [];

  function isPrime(num) {
    if (num === 1) return false;

    // 0, 1번째는 소수에서 제외하므로 false로 시작
    let values = Array.from({ length: num + 1 }, () => true).fill(false, 0, 2);
    for (let i = 2; i * i <= num; i++) {
      if (values[i]) {
        for (let j = i * i; j <= num; j += i) {
          values[j] = false;
        }
      }
    }
    // 나눠지는 것이 단 하나라도 없으면 소수라는 의미로 결과에 대해 부정('!')함
    return !values.some((value, idx) => value && num !== idx && num % idx === 0);
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let reversedNum = 0;

    while (num > 0) {
      reversedNum = reversedNum * 10 + (num % 10);
      num = parseInt(num / 10);
    }

    if (isPrime(reversedNum)) {
      answer.push(reversedNum);
    }
  }

  return answer;
}
