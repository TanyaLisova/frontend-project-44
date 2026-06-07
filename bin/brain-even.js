#!/usr/bin/env node
import { greeting }  from "../src/index.js"
import readlineSync from  'readline-sync';

let count = 0

const generateNum = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const even = (n) => n % 2 === 0;

const answer = () => {
    return readlineSync.question('Your answer: ');
}

const game = () => {
    // console.log('Welcome to the Brain Games!');
    const name = greeting()
    // console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (count < 3) {
        let num = generateNum() 
        console.log(`Question: ${num}`);

        let correct = even(num) ? 'yes' : 'no'

        let answ = answer()

        if (answ === correct) {
            console.log('Correct!');
            count++
        } else {
            console.log(`'${answ}' is wrong answer ;(. Correct answer was '${correct}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}`);
    
}

game()