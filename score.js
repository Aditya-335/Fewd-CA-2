var score = localStorage.getItem("score");
var numscore = parseInt(score);

var scoreboard = document.getElementById("score-board");




var resetButton = document.getElementById("reset");


resetButton.onclick = ()=>{
    location.href = "./game.html";
}

if(numscore>=0 && numscore<5){
    scoreboard.innerHTML = score + " <br>Tough luck😔";
}

if (numscore > 5) {
    scoreboard.innerHTML = '<div style="text-align: center;">' + score + ' <br> Congrats!🥳</div>';
}



