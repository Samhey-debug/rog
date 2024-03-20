function startGame(game) {
    if (game === 'guess') {
        // Redirect to Guess the Number game page
        window.location.href = 'guess.html';
    } else if (game === 'ttt') {
        // Redirect to Tic Tac Toe game page
        window.location.href = 'ttt.html';
    } else if (game === 'mind') {
        // Redirect to Mind Reader game page
        window.location.href = 'mind.html';
    }
}
