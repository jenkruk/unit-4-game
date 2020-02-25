$(document).ready(function () {

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // Selects a random number between 19 and 120
    var Random = Math.floor(Math.random() * 101 + 19)

    // Setting up a random number between 1-12 for each crystal between
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    // Assigning a random number to the randomNumber id in the html doc
    $('#randomNumber').text(Random);

    //  Assigning text to update in html ID's
    $('#finalTotal').text(userTotal);
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //resets the game
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    //adds the wins to the userTotal
    function won() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //addes the losses to the userTotal
    function lost() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }
    //on click event to add to user total
    $('#one').on('click', function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal == Random) {
            won();
        } else if (userTotal > Random) {
            lost();
        }
    })
    $('#two').on('click', function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal == Random) {
            won();
        } else if (userTotal > Random) {
            lost();
        }
    })

    $('#three').on('click', function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal == Random) {
            won();
        } else if (userTotal > Random) {
            lost();
        }
    })
    $('#four').on('click', function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        //win/lose conditions
        if (userTotal == Random) {
            won();
        } else if (userTotal > Random) {
            lost();
        }
    });
});