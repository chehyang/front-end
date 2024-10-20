// 1. 유저의 이름, 유저의 나이, 유저의 mbit

// name = prompt("이름은?");
// age = prompt("나이는?");
// mbti = prompt("MBTI는?");

// console.log(name);
// console.log(age);
// console.log(mbti);

// 2. 유저에게 오늘의 날짜와 요일, 할 일, 기분 물어본 후에
// 당신은 오늘 ~ 요일에 할 일은 ~~ 이시군요! 기분이 ~~~ 하시군요!

// const day = prompt("오늘의 요일은?");
// const todo = prompt("오늘의 할 일은?");
// const feeling = prompt("오늘의 기분은?");

// console.log(
//   `당신은 오늘 ${day}에 할일은 ${todo}이시군요! 기분도 ${feeling}하시군요!`
// );

// 3. 유저에게 첫번째 숫자, 두번째 숫자를 입력 받고 두 수의 합을 콘솔 로그로 나타내기
// const first = prompt("첫번째 숫자 입력");
// const second = prompt("두번째 숫자 입력");

// console.log(Number(first) + Number(second));

// 4. 유저에게 나이를 물어보고, 태어난 년도 콘솔로그로 나타내기
// const age = prompt("유저의 나이는?");

// console.log(2024 - Number(age));

// 5. 유저에게 한 변의 길이를 입력 받고, 정사각형의 넓이 나타내기

const squre = prompt("한 변의 길이 입력");
console.log(`정사각형의 넓이는 ${Number(squre) * Number(squre)}입니다.`);

// 6. 유저에게 밑변과 높이를 입력 받고, 정삼각형의 넓이 나타내기
const one = Number(prompt("밑변 길이 입력"));
const two = Number(prompt("높이 입력"));
console.log(`삼각형의 넓이는 ${(one * two) / 2}입니다.`);

// 7. 유저에게 반지름을 입력 받고, 원의 넓이와 둘레 나타내기
const circle = Number(prompt("반지름 길이 입력"));
console.log(
  `원의 넓이는 ${circle * circle * 3.14}, 둘레는 ${2 * circle * 3.14}`
);

// 8. 유저에게 일본 여행 갈 여비를 엔화로 바꾸기
// ex) 10000000 -> 109170엔 환전
const won = Number(prompt("환전 해 갈 금액 입력"));
const rate = 109 / 1000;
console.log(`엔화로 ${won * rate}`);
