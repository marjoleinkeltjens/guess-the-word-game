// List where player's guessed letters will appear
const guessedList = document.querySelector(".guessed-letters");
// Button with "guess"
const button = document.querySelector(".guess");
// Text input where player will guess a letter
const letterInput = document.querySelector(".letter");
// Empty paragraph where the word in progress will appear
const wordInProgress = document.querySelector(".word-in-progress");
// Paragraph where the remaining guesses will display
const remaining = document.querySelector(".remaining");
// Span inside paragraph where remaining guesses will display
const remainingSpan = document.querySelector(".remaining span");
// Empty paragraph where messages will appear when the player guesses a letter
const messages = document.querySelector(".message");
// Hidden button that will appear prompting to play again
const hiddenButton = document.querySelector(".play-again hide");
// Starting word for testing
const word = "Magnolia";

// Display symbols as placeholders for the chosen letters
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
button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});









