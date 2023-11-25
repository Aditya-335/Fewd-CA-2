// Array containing words and hints
const words = [
    //... (word objects with 'word' and 'hint' properties)
  ];
  
  // DOM element references
  const scoreElement = document.querySelector(".score");
  const highscoreElement = document.querySelector(".high-score");
  const wordText = document.querySelector(".word");
  const hintText = document.querySelector(".hint span");
  const timeText = document.querySelector(".time b");
  const inputField = document.querySelector("input");
  const refreshBtn = document.querySelector(".refresh-word");
  const checkBtn = document.querySelector(".check-word");
  let correctWord, timer;
  let score = 0; // Initialize score
  
  // Fetch highscore from local storage or set to 0 if it doesn't exist
  let highscore = localStorage.getItem("high-score") || 0;
  highscoreElement.innerText = `High score: ${highscore}`;
  
  // Timer function
  const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (maxTime > 0) {
        maxTime--;
        return (timeText.innerText = maxTime);
      }
      clearInterval(timer);
      alert(`Time's up! The correct word was ${correctWord.toUpperCase()}`);
      if (maxTime === 0) {
        // Redirect to a result page with the score
        location.href = "./result.html?score=" + score;
        localStorage.setItem("score", score);
      }
      initGame(); // Restart the game
    }, 1000);
  };
  
  // Initialize the game
  const initGame = () => {
    initTimer(30); // 30 seconds per round
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
  
    // Shuffle the letters of the word
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
  
    wordText.innerText = wordArray.join(""); // Display shuffled word
    hintText.innerText = randomObj.hint; // Display hint
    correctWord = randomObj.word.toLowerCase(); // Store the correct word
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length + 1);
  };
  
  // Check if the word entered by the user is correct
  const wordCheck = () => {
    let userWord = inputField.value.toLowerCase();
  
    if (userWord === correctWord) {
      score++;
      highscore = score >= highscore ? score : highscore;
      localStorage.setItem("high-score", highscore);
      scoreElement.innerText = `Score: ${score}`;
      highscoreElement.innerText = `High score: ${highscore}`;
    }
  
    initGame(); // Restart the game after checking the word
  };
  
  // Event listener for checking the word on button click
  checkBtn.addEventListener("click", wordCheck);
  
  // Event listener for checking the word on pressing 'Enter'
  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      wordCheck();
    }
  });
  
  // Initialize the game when the page loads
  initGame();
  
