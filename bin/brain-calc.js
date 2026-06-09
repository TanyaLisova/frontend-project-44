#!/usr/bin/env node

import { genNum, greeting }  from "../src/index.js"
import readlineSync from  'readline-sync';


const game = () => {
    const name = greeting()
    console.log('What is the result of the expression?');
    
    // const genNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    // const genNum = genNum()
    const answer = () => {
        return readlineSync.question('Your answer: ');
    }
    
    let count = 0
    
    while (count < 3) {
        let result
        let num1 = genNum(0, 100)
        let num2 = genNum(0, 100)

        
        let operator = genNum(1, 3)
        console.log('DEBUG: operator =', operator);
        let symbol
        switch (operator) {
            case 1:
                symbol = '+'
                result = num1 + num2
                break;
            case 2:
                symbol = '-'
                result = num1 - num2
                break;
            case 3:
                symbol = '*'
                result = num1 * num2
                break
        }
        console.log(`Question: ${num1} ${symbol} ${num2}`);
        let answ = answer()
        if (Number.parseInt(answ, 10) === result) {
            console.log('Correct!');
            count++;
        } else {
            console.log(`'${answ}' is wrong answer ;(. Correct answer was '${result}'.`);
            console.log(`Let's try again, ${name}!`);
            return; 
        }

    }
    console.log(`Congratulations, ${name}`);
}

game()