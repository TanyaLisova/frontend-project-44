#!/usr/bin/env node

import { genNum, greeting, answer } from "../src/index.js";

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;

  while (count < 3) {
    let num = genNum(2, 100);
    let correct = isPrime(num) ? "yes" : "no";
    console.log(`Question: ${num}`);
    let answ = answer();

    if (answ === correct) {
            console.log('Correct!');
            count++
        } else {
            console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correct}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
  }
  console.log(`Congratulations, ${name}!`);
};

game()