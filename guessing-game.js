// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask for guess
function askGuess () {
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
let secretNumber;
//askGuess();

//function to check user guess
function checkGuess (num) {

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

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  // Enter a max number: *20*
// Enter a min number: *11*
// I'm thinking of a number between 11 and 20...

function askRange() {

    let min;
    let max;

    rl.question('Enter a max number: ', (max) => {
        rl.question('Enter a min number: ', (min) => {
            console.log(`I'm thinking of a number between ${min} and ${max}`);

            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();

          });
      });

}

askRange();
