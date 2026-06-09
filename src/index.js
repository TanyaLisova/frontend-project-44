import readlineSync from 'readline-sync';


export function greeting() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${name}`);  
    return name
}

export function genNum(min, max)  {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function answer() {
    return readlineSync.question('Your answer: ');
}