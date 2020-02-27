$(document).ready(function () {

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    // Selects a random number between 19 and 120 on window load and reset
    var Random = Math.floor(Math.random() * 101 + 19)

    // Setting up a random number between 1-12 for each crystal
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    // Assigning a random number to the randomNumber id in the html doc
    $('#randomNumber').text(Random);

    // Assigning text to update in html ID's
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
        $("#results").text("You won!");
        $('#results').fadeIn('fast', function () {
            setTimeout(function () {
                $('#results').fadeOut('slow');
            }, 2000);
        });
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //addes the losses to the userTotal
    function lost() {
        $("#results").text("Try Again!");
        $('#results').fadeIn('fast', function () {
            setTimeout(function () {
                $('#results').fadeOut('slow');
            }, 2000);
        });
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    //blue crystal click function
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
        click.play();
    })

    //green crystal click function
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
        click.play();
    })

    //orange crystal click function
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
        click.play();
    })

    //pink crystal click function
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
        click.play();
    });
});