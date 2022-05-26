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
let secretNumber = randomInRange(0, 100);
//askGuess();

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

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }


// askRange
// Delete or comment out your global call to askGuess for now. Define a function called askRange. This method should
// ask the user to enter a minimum number and then ask them to enter a maximum number. We want to ask them for the
// maximum only after they have responded to the first question. This means you will have to use the question method
// twice! Recall what you learned from the readings. The question method is asynchronous, so how can we ask two
// questions one after the other? We'll leave the implementation to you. After the user enters their min and max, you
// should print a message confirming the range. Here is an example of how our askRange method behaves. We've put
// asterisks around the user's input:

// Enter a max number: *20*
// Enter a min number: *11*
// I'm thinking of a number between 11 and 20...
// As always, test your function thoroughly by adding a call to askRange in global scope. Your program may hang because
// the interface is not closed after the user enters their max. That's okay, since we are debugging; press ctrl + c
// in your terminal to kill the program.

// Once your function is able to properly take the min and max from your user, it's time to put it all together! When
// the user enters both the min and the max, call your randomInRange function with that min and max as arguments.
// Recall that the user's input is automatically interpreted as strings and not numbers. You should explicitly turn
// the min and max to actual numbers before passing them in. Take the random number returned from your function and set
// that as the secretNumber. Then call your old askGuess method so that gameplay can begin. All of this should happen
// within the askRange function. We design it this way because we only want to ask for a guess after the random number
// has been chosen.

// The askRange function is the "main" function that will begin our game, so you'll need call it once in the global
// scope. Run your program and play a few games!

// Before moving onto the bonus ask a TA for a code review.
