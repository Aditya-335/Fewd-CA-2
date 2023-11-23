var score = localStorage.getItem("score");

var scoreboard = document.getElementById("score-board");

scoreboard.innerHTML = score;


var resetButton = document.getElementById("reset");


resetButton.onclick = ()=>{
    location.href = "./game.html";
}



