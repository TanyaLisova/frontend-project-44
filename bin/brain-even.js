#!/usr/bin/env node
import { greeting, genNum }  from "../src/index.js"
import readlineSync from  'readline-sync';

let count = 0

const even = (n) => n % 2 === 0;

const answer = () => {
    return readlineSync.question('Your answer: ');
}

const game = () => {
    const name = greeting()

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (count < 3) {
        let num = genNum() 
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