// Retrieve the 'score' value from local storage
var score = localStorage.getItem("score");

// Convert 'score' to an integer using parseInt
var numscore = parseInt(score);

// Get the HTML element with the ID 'score-board'
var scoreboard = document.getElementById("score-board");

// Get the HTML element with the ID 'reset'
var resetButton = document.getElementById("reset");

// Functionality for the 'reset' button when clicked
resetButton.onclick = () => {
    // Redirect to the 'game.html' page
    location.href = "./game.html";
}

// Check the value of 'numscore' for score display
if (numscore >= 0 && numscore < 5) {
    // If the score is between 0 and 5, display a message indicating tough luck
    scoreboard.innerHTML = score + " <br>Tough luck😔";
}

// Check if the score is greater than 5
if (numscore > 5) {
    // If the score is greater than 5, display a congratulations message
    scoreboard.innerHTML = '<div style="text-align: center;">' + score + ' <br> Congrats!🥳</div>';
}
