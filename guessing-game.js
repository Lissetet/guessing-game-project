// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask for guess and check against secretNumber
// end game if guess correct
// ask again if incorrect
function askGuess () {
rl.question('Enter a guess: ', (answer) => {
    numAttempts--;

    let check = checkGuess(Number(answer));



    if (!check && numAttempts > 0) {
        askGuess();
    } else if (!check && numAttempts ===0) {
        console.log('You lose!');
        console.log(`The secret number was ${secretNumber}.`);
        rl.close();
    } else {
        rl.close();
    }

  });
}

//initialize secretNumber
let secretNumber;
let numAttempts;


//function to check user guess
function checkGuess (num) {

    if (num < secretNumber && numAttempts > 0) {
        console.log('Too low');
        console.log(`You have ${numAttempts} guesses left.`);
        return false;
    } else if (num === secretNumber) {
        console.log('You win!');
        return true;
    } else if (num > secretNumber && numAttempts > 0) {
        console.log('Too high');
        console.log(`You have ${numAttempts} guesses left.`);
        return false;
    } else {
        return false;
    }

}

// generate random integer between min and max
function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


// send user inputs for min and max to randomInRange
// assign secretNumber
// call askGuess to initialize game
function askRange() {

    let min;
    let max;

    rl.question('Enter a max number: ', (max) => {
        rl.question('Enter a min number: ', (min) => {
            console.log(`I'm thinking of a number between ${min} and ${max}`);
            console.log(`You have ${numAttempts} guesses left.`);
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();

          });
      });

}

// ask user for number of guesses allowed
function askLimit() {

    rl.question('Enter number of guesses allowed: ', (limit) => {

        numAttempts = Number(limit);
        askRange();

    });
}

// initialize game
askLimit();
