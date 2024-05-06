function generateRandomNumber() {
    let numbers = [];
    while (numbers.length < 4) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.join('');
}

const secretCode = generateRandomNumber(); 

function playGame(guess) {
    const guessStr = guess.toString();
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
        if (guessStr[i] === secretCode[i]) {
            bulls++;
        } else if (secretCode.includes(guessStr[i])) {
            cows++;
        }
    }

    if (bulls === 4) {
        return "Você acertou!";
    }

    return `Bulls: ${bulls}, Cows: ${cows}`;
}

const guessResult = playGame(1234); 
console.log(guessResult); 
