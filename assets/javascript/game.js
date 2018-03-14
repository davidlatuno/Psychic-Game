var letter = "abcdefghijklmnopqrstuvwxyz";

var wins = 0;

var losses = 0;

var guessNum = 10;

var userGuess = [];

document.onkeyup = key;

function key() {

    var randLetter = letter.charAt(Math.floor(Math.random() * (letter.length)));

    var userLetter = event.key;

    if (letter.includes(event.key) && userLetter !== userGuess[userGuess.length - 1] && userLetter !== userGuess[userGuess.length - 2] && userLetter !== userGuess[userGuess.length - 3] && userLetter !== userGuess[userGuess.length - 4] && userLetter !== userGuess[userGuess.length - 5] && userLetter !== userGuess[userGuess.length - 6] && userLetter !== userGuess[userGuess.length - 7] && userLetter !== userGuess[userGuess.length - 8] && userLetter !== userGuess[userGuess.length - 9] && userLetter !== userGuess[userGuess.length - 10]) {


        if (userLetter === randLetter) {
            (wins++);
            guessNum = 10;
            userGuess.splice(0, userGuess.length);

        } else {

            guessNum--;

            userGuess.push(userLetter);

        }

        if (guessNum === 0) {
            losses++;
            guessNum += 10;
        }

        if (userGuess.length === 10) {
            userGuess.splice(0, 10);
        }

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessNum").innerHTML = guessNum;
        document.getElementById("userGuess").innerHTML = userGuess;
    }

}



