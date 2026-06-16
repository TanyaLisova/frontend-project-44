#!/usr/bin/env node

import { genNum, greeting, answer } from "../src/index.js";

let count = 0;

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const game = () => {
  const name = greeting();
  let devider;
  let num1;
  let num2;

  console.log("Find the greatest common divisor of given numbers.");

  while (count < 3) {
    do {
      num1 = genNum(1, 100);
      num2 = genNum(1, 100);
      devider = gcd(num1, num2);
    } while (devider === 1);
    console.log(`Question: ${num1} ${num2}`);
    let ans = answer();

    if (+ans === devider) {
      console.log("Correct!");
      count++;
    } else {
      console.log(
        `'${ans}' is wrong answer ;(. Correct answer was '${devider}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

game();
