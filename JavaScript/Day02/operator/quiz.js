// 두 정수를 유저에게 입력 받고, 더 큰 숫자를 알럿으로 나타내기!

// const a = Number(prompt("첫 번째 정수를 입력해주세요"));
// const b = Number(prompt("두 번째 정수를 입력해주세요"));
// const result = a > b ? a : b;

// alert(result);

// 1. 도너츠 구매 갯수와 가격 입력
// 10개 이상이면 10% 할인, 20개 이상이면 20% 할인 해 주고 콘솔로 나타내기
const donut = Number(prompt("도너츠 몇 개 구매 하시나요?"));
const price = Number(prompt("도너츠 하나당 가격은 얼마인가요?"));
const total_price = donut * price;

const isUnder10 = donut < 10;
const isOver10andUnder20 = 10 <= donut && donut < 20;
const isOver20 = 20 <= donut;

isUnder10 && alert(`총 금액 ${total_price}`);
isOver10andUnder20 && alert(`총 금액 ${total_price * 0.9}`);
isOver20 && alert(`총 금액 ${total_price * 0.8}`);

// 2. 정수를 입력해서 홀수인지 짝수인지 알려주기
// 정수 입력하면 콘솔로그 ~~은 짝수입니다

const num = Number(prompt("정수를 입력해주세요"));
// console.log(num % 2 == 0 ? `${num}은 짝수입니다.` : `${num}은 홀수입니다.`);

// const result = num % 2 === 1 ? "홀수" : "짝수";
const result = !!(num % 2) ? "홀수" : "짝수";
alert(`${num}은 ${result}입니다.`);
