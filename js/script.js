// List where player's guessed letters will appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// Button with "guess"
const guessLetterbutton = document.querySelector(".guess");
// Text input where player will guess a letter
const letterInput = document.querySelector(".letter");
// Empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// Paragraph where the remaining guesses will display
const remainingGuessElement = document.querySelector(".remaining");
// Span inside paragraph where remaining guesses will display
const remainingGuessesSpan = document.querySelector(".remaining span");
// Empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");
// Hidden button that will appear prompting to play again
const playAgainButton = document.querySelector(".play-again hide");
// Starting word for testing
const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Player clicking the button
guessLetterbutton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Let's grab what was entered in the input
    const guess = letterInput.value;
    // Let's make sure that it is a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        // We've got a letter! Let's guess!
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please enter a single letter.";
    }
    else if (!input.match(acceptedLetter)) {
        // Did you type a number, a special character or some other non letter things?
        message.innerText = "Please add a letter from A to Z";
    } else {
    // We got a single letter, yay!
    return input;
    }
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You have already guessed that letter. Please try again";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};












