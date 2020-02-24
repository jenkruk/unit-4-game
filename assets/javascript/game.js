var img = document.createElement('img');
type = "text/javascript"
src = "./assets/images/blue.png" >



    var targetNumber = 53;
var counter = 0;
var numberOptions = [10, 5, 3, 7];
var increment = numberOptions[Math.round(Math.random())];

$("#crystals-to-collect").text(targetNumber);

/* Buttons */
$(".blue").on("click", function () {
    counter += increment;
    alert("Your new score is: " + counter + " crystals!");
    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!!");
    }
});

$(".green").on("click", function () {
    counter += 10;
    alert("Your new score is: " + counter + " crystals!");
    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!!");
    }
});

$(".orange").on("click", function () {
    counter += 10;
    alert("Your new score is: " + counter + " crystals!");
    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!!");
    }
});

$(".pink").on("click", function () {
    counter += 10;
    alert("Your new score is: " + counter + " crystals!");
    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!!");
    }
});