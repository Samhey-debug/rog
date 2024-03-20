let attempts = 0;
let randomNumber;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = parseInt(guessInput.value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    guessInput.value = ''; // Clear the input 
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
    message.classList.add('show');
    disableInputAndButton();
    document.getElementById('resetButton').style.display = 'block'; // Show reset button
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.classList.add('show');
  } else {
    message.textContent = 'Too high! Try again.';
    message.classList.add('show');
  }

  guessInput.value = ''; // Clear the input field
}

function disableInputAndButton() {
  document.getElementById('guessInput').disabled = true;
}

function enableInputAndButton() {
  document.getElementById('guessInput').disabled = false;
}

function resetGame() {
  document.getElementById('message').textContent = '';
  enableInputAndButton();
  document.getElementById('guessInput').value = '';
  attempts = 0;
  document.getElementById('resetButton').style.display = 'none'; // Hide reset button again
  randomNumber = generateRandomNumber(); // Generate a new random number
}

// Initialize the game
randomNumber = generateRandomNumber();
  
