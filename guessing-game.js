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

    if (!check) {
        askGuess();
    } else {
        rl.close();
    }

  });
}

//initialize secretNumber
let secretNumber;


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



// Bonus: Limiting the number of turns
// With our main features complete, let's work on increasing the difficulty of the game by limiting the number of
// guesses a user can make. If the player uses all of their attempts without guessing the correct number, they will
// lose the game.

// Limiting turns to 5
// Start by limiting the player to 5 attempts. You can accomplish this by initializing a numAttempts variable in the
// global scope. Refactor your askGuess method to decrement the number of remaining attempts whenever it is called.
// If the numAttempts reaches 0 before the correct guess is made, end the game by printing 'You Lose'. We'll leave
// the details of the implementation up to you.

// Limiting turns dynamically
// Make the limit dynamic by allowing the user to specify the number of attempts. We recommend creating an askLimit
// function that behaves similarly to askRange. Be sure to chain the callbacks in the right order to ensure the game
// is configured properly. For example, one valid callback chain order would be askLimit -> askRange -> askGuess.
// If you follow this order, you'll need to call askLimit in the global scope to begin the game.
