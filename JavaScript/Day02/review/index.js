// 1. 유저에게 운동 3개를 물업고, 콘솔로 1번 운동 -> 2 번운동-> 3 번운동을
const first = prompt("운동 첫 번째를 적어주세요");
const second = prompt("운동 두 번째를 적어주세요");
const third = prompt("운동 세 번째를 적어주세요");

console.log(`${first} -> ${second} -> ${third}`);

// 2. 두 정수 n, m을 입력 받고,  m의 n 제곱의 결과를 콘솔로 나타내기
const n = Number(prompt("정수 n을 입력해 주세요"));
const m = Number(prompt("정수 m을 입력해 주세요"));

console.log(`${m}의 ${n} 제곱은 ${m ** n}입니다`);

// 3. 달러를 입력하면 원화로 콘솔에 나타내기
const dollar = Number(prompt("원화로 바꿀 달러를 입력해 주세요"));
const rate = USD * 1370.01;

console.log(`원화로 ${rate}원입니다`);

// 4. 1000 이하의 정수를 입력 받고 분초로 나타내기
const time = Number(prompt("1000 이하의 정수를 입력하세요"));
const min = parseInt(time / 60);
const sec = time % 60;

console.log(`${min}분 ${sec}초입니다`);
