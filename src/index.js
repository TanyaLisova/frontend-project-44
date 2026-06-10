import readlineSync from 'readline-sync';


export function greeting() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${name}`);  
    return name
}

export function genNum(min, max)  {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const fraction = array[0] / (0xffffffff + 1);
    return Math.floor(fraction * (max - min + 1)) + min;
}


export function answer() {
    return readlineSync.question('Your answer: ');
}