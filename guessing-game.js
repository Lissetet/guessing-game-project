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
    let check = checkGuess(Number(answer));

    numAttempts--;

    if (!check && numAttempts > 0) {
        askGuess();
    } else if (!check && numAttempts ===0) {
        console.log('You lose!');
        rl.close();
    } else {
        rl.close();
    }

  });
}

//initialize secretNumber
let secretNumber;
let numAttempts = 5;


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

            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();

          });
      });

}

// initialize game
askRange();



// Limiting turns dynamically
// Make the limit dynamic by allowing the user to specify the number of attempts. We recommend creating an askLimit
// function that behaves similarly to askRange. Be sure to chain the callbacks in the right order to ensure the game
// is configured properly. For example, one valid callback chain order would be askLimit -> askRange -> askGuess.
// If you follow this order, you'll need to call askLimit in the global scope to begin the game.
