import readlineSync from 'readline-sync';
export function askName() {
    const name = readlineSync.question('May I have your name? ');

    return name
}