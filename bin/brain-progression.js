#!/usr/bin/env node

import { genNum, greeting, answer } from "../src/index.js";

const progress = () => {
  let seq = [];

  let start = genNum(1, 100);

  let len = genNum(5, 10);

  let step = genNum(1, 10);

  let index = genNum(0, len - 1);

  for (let i = 0; i < len; i++) {
    let currentElement = start + i * step;
    // console.log(currentElement);

    seq.push(currentElement);
  }

  let hidden = String(seq[index]);
  seq[index] = "..";

  let string = seq.join(" ");

  return { string, hidden };
};

const game = () => {
  const name = greeting();
  console.log("What number is missing in the progression?");
  let count = 0
  
  while (count < 3) {
    const { string, hidden } = progress();
    console.log(`Question: ${string}`);
    let answ = answer()
    
    if (answ === hidden) {
            console.log('Correct!');
            count++;
        } else {
            console.log(`'${answ}' is wrong answer ;(. Correct answer was '${hidden}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
  }
  console.log(`Congratulations, ${name}`);
};

game();
