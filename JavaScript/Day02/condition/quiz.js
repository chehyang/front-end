// 유저에게 프로그래밍 점수를 입력 받고,
// 90 이상 A, 80 이상 B, 70 이상 C, 60 이상 D, 그 외에는 F

// const score = Number(prompt("프로그래밍 점수를 입력하세요"));

// if (score >= 90) {
//     console.log("A");
// } else if (score >= 80) {
//     console.log("B");
// } else if (score >= 70) {
//     console.log("C");
// } else if (score >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// 유저에게 각도를 물어보고 평각, 직각, 둔각, 예각 나타내기!

// const angle = Number(prompt("몇 도입니까?"));

// if (angle == 180) {
//   console.log("평각입니다.");
// } else if (angle == 90) {
//   console.log("직각입니다.");
// } else if (angle > 90) {
//   console.log("둔각입니다.");
// } else if (anlge < 90) {
//   console.log("예각입니다.");
// }

// const isAcute = 0 <= angle && angle < 90;
// const isRight = angle == 90;
// const isObtuse = 90 < angle && angle < 180;
// const isFlat = angle == 0 || angle == 180;

// if (isAcute) {
//   console.log("평각입니다.");
// } else if (isRight) {
//   console.log("직각입니다.");
// } else if (isObtuse) {
//   console.log("둔각입니다.");
// } else if (isFlat) {
//   console.log("예각입니다.");
// } else {
//   console.log("해당 각은 없습니다.");
// }

// 버스 요금 계산기 프로그램
// 유저에게 1. 마을버스[1000] 2.시내버스[1500] 3.광역버스 [2000] 4.고속버스[5000] 선택하고
// 유저에게 나이를 물어보기, 금
// 어린이 50% 할인 / 8~19세: 30% 할인 / 65세 이상: 20% 할인
// 모든 선택 후 콘솔로그: ~~ 버스의 최종 금액은 ~~ 입니다.

const bus = Number(
  prompt(
    "1. 마을버스[1000] 2.시내버스[1500] 3.광역버스 [2000] 4.고속버스[5000] 선택"
  )
);
const age = Number(prompt("현재 나이가 몇 살입니까?"));

if (bus == 1) {
  if (age < 8) {
    console.log(`마을 버스의 최종 금액은 ${1000 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`마을 버스의 최종 금액은 ${1000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`마을 버스의 최종 금액은 ${1000 * 0.7}입니다.`);
  } else {
    console.log(`마을 버스의 최종 금액은 ${1000}입니다.`);
  }
} else if (bus == 2) {
  if (age < 8) {
    console.log(`마을 버스의 최종 금액은 ${1500 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`마을 버스의 최종 금액은 ${1500 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`마을 버스의 최종 금액은 ${1500 * 0.7}입니다.`);
  } else {
    console.log(`마을 버스의 최종 금액은 ${1500}입니다.`);
  }
} else if (bus == 3) {
  if (age < 8) {
    console.log(`마을 버스의 최종 금액은 ${2000 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`마을 버스의 최종 금액은 ${2000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`마을 버스의 최종 금액은 ${2000 * 0.7}입니다.`);
  } else {
    console.log(`마을 버스의 최종 금액은 ${2000}입니다.`);
  }
} else if (bus == 4) {
  if (age < 8) {
    console.log(`마을 버스의 최종 금액은 ${5000 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`마을 버스의 최종 금액은 ${5000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`마을 버스의 최종 금액은 ${5000 * 0.7}입니다.`);
  } else {
    console.log(`마을 버스의 최종 금액은 ${5000}입니다.`);
  }
}
