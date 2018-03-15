var letter = "abcdefghijklmnopqrstuvwxyz";

var wins = 0;

var losses = 0;

var guessNum = 10;

var userGuess = [];

document.onkeyup = key;

function key() {

    var randLetter = letter.charAt(Math.floor(Math.random() * (letter.length)));

    var userLetter = event.key;

    var include = userGuess.includes(event.key);

    if (letter.includes(event.key)) {

        if (include) {
            return;
        }


        if (userLetter === randLetter) {
            (wins++);
            guessNum = 10;
            userGuess.splice(0, userGuess.length);
            userGuess.push("&#x2618;");

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
            userGuess.push("&#x2618;");
        }

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessNum").innerHTML = guessNum;
        document.getElementById("userGuess").innerHTML = userGuess.join(" ");
    }

}



