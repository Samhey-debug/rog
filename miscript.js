function guessNumber() {
  var userNumber = document.getElementById('userNumber').value;
  if (userNumber < 1 || userNumber > 1000 || isNaN(userNumber)) {
    document.getElementById('result').innerText = 'Please enter a valid number between 1 and 1000.';
    return;
  }

  var loadingDiv = document.getElementById('loading');
  loadingDiv.classList.remove('hidden');

  setTimeout(function() {
    var resultText = "You're thinking of the number " + userNumber + ".";
    document.getElementById('result').innerText = resultText;
    loadingDiv.classList.add('hidden');
  }, 5000); // Simulating a delay for calculation
}
