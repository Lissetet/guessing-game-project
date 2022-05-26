// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask for guess
const askGuess = () => {
rl.question('Enter a guess: ', (answer) => {
    let check = checkGuess(Number(answer));

    if (!check) {
        askGuess();
    } else {
        rl.close();
    }

  });
}

//initialize game
let secretNumber = 35;
askGuess();

//function to check user guess
const checkGuess = (num) => {

    if (num < secretNumber) {
        console.log('Too low');
        return false;
    } else if (num === secretNumber) {
        console.log('You win!');
        return true;
    } else if (num > secretNumber) {
        console.log('Too high');
        return false;
    }

}
