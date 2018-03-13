var letter = "abcdefghijklmnopqrstuvwxyz";

var wins = 0;

var losses = 0;

var guessNum = 10;

var userGuess = [];

window.addEventListener('keydown', key);

function key() {

    if (letter.includes(event.key)) {

        var randLetter = letter.charAt(Math.random() * (letter.length + 1));


        var userLetter = event.key;
        if (userLetter === randLetter) {
            (wins++);
            guessNum = 10;
            userGuess.splice(0, userGuess.length);

        } else if (userLetter !== userGuess[userGuess.length - 1]) {

            {
                (guessNum--);


                if (guessNum === 0) {
                    losses++;
                    guessNum += 10;
                }



                userGuess.push(userLetter);

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
}


// if (userLetter !== userGuess[userGuess.length - 1]) 








