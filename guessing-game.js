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
    checkGuess(Number(answer));
    rl.close();
  });
}

askGuess();

let secretNumber = 35;

const checkGuess = (num) => {

    if (num < secretNumber) {
        console.log('Too low');
        return false;
    } else if (num === secretNumber) {
        console.log('Correct!');
        return true;
    } else if (num > secretNumber) {
        console.log('Too high');
        return false;
    }

}


// askGuess

// When accepting user input, there is a very important nuance to take into account. When the user enters their guess
// it will be interpreted as a string of numeric characters and not an actual number type! Depending on how you wrote
// your checkGuess function, this could be disastrous because:

// console.log(42 === "42"); // false
// To overcome this issue, we should explicitly turn their guess into a number before we pass it into checkGuess.
// You can do this by calling the Number function. Here's an example of Number in action:

// let str = "42";
// console.log(42 === Number(str)); // true
// Test your askGuess by calling it once in the global scope. Then run your program a few times, entering different
// numbers. After trying a single guess, you will have to run the program again. Be sure to include an attempt with a
// correct guess by entering the secretNumber value that you hard-coded.

// Once you have verified that the user's guess is being properly checked, let's work on having the function ask the
// user for another guess if they are incorrect. Refactor the askGuess method with some conditional logic. Recall
// that the checkGuess function returns a boolean - very convenient! Here is how the askGuess function should flow:

// check the user's guess
// if it is correct, print out 'You win!' and close the interface
// if it is incorrect, call askGuess again
// You may find it a bit startling that you can reference the askGuess function from within the askGuess function.
// That is, you can a reference a function from within itself! This self-referential mechanism is leveraged quite
// frequently in programming. We will return to this concept in later lessons.

// Run your program and test it out, being sure that you have a single call to askGuess in the global scope so the game
//  can begin. Woohoo! We now have our minimal viable product (MVP) version of the game.
