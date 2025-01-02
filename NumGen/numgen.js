//Fuction to generate a random number between 0 and 100
function numGen() {
    return Math.floor(Math.random() * 100);
}

// TODO: Store state and set a number of attempts before the game ends.
// TODO: After 3 right answers, move up the difficulty.
// TODO: Give a hint after 2 worng answers.
//Function to allow a user to guess a number
function numGuesser() {
    let num = numGen(); // Calling the numGen function
    let guess = prompt("Guess a number between 0 and 100"); // Allowing for the user input
    while (guess != num) { // Looping while checking if the guess is correct
        if (guess > num) {
            guess = prompt("Too high, try again");
        } else {
            guess = prompt("Too low, try again");
        } if (guess == num) {
            alert("You got it!");
        }
    }
}

numGuesser(); // Calling the numGuesser function