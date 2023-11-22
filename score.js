// Iteration 8: Making scoreboard functional
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

var score = urlParams.get("score");

var scoreboard = document.getElementById("score-board");

var resetButton = document.getElementById("reset");

scoreboard.innerHTML = score;

resetButton.onclick = ()=>{
    location.href = "./game.html";
}