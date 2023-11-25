// Array of words with corresponding hints
const words = [
  // List of word objects with 'word' and 'hint' properties
  {
    word:"addition",
    hint:"The process of adding numbers"

},
{
    word:"meeting",
    hint: "Event in which people come together"
},
{
    word:"number",
    hint:"Math symbol used for counting"
},
{
    word:"exchange",
    hint: "The act of trading"
},
{
    word:"garden",
    hint:"space for planting flowers"
},
{
    word:"statement",
    hint:"a declaration of something"
},
{
    word:"expert",
    hint:"Person with extensive knowledge"
},
{
    word:"library",
    hint:"Place containing collection of books"
},
{
    word:"mansion",
    hint:"A huge house"
},
{
    word:"guitar",
    hint:"a musical instrument"
},
{
    word:"second",
    hint:"0ne-sixtieth of a minute"

},
{
    word:"canvas",
    hint:"Piece of fabric for oil painting"
},
{
    word:"delhi",
    hint:"Capital of India"
},
{
    word: "Computer",
    hint: "Electronic device for processing data"
},
{
    word:"Recipe",
    hint:"Set of instructions for cooking"
},
{
    word:"Friendship",
    hint:"Close relationship between people"
},
{
    word:"Journey",
    hint:"Adventure or trip from one place to another"
},

{
    word: "laughter",
    hint: "Expression of joy or amusement"
},
{
    word: "ocean",
    hint: "Vast body of saltwater"
},
{
    word: "camera",
    hint: "Device for capturing images"
},
{
    word: "sunshine",
    hint: "Light and warmth from the sun"
},
{
    word: "adventure",
    hint: "Exciting experience or journey"
},
{
    word: "bicycle",
    hint: "Two-wheeled vehicle"
},
{
    word: "umbrella",
    hint: "Object used for protection from rain"
},
{
    word: "volcano",
    hint: "Mountain that erupts"
},
{
    word: "symphony",
    hint: "Elaborate musical composition"
},
{
    word: "detective",
    hint: "Person who investigates mysteries"
},
{
    word: "treasure",
    hint: "Valuable or precious items"
},
{
    word: "puzzle",
    hint: "Game or problem that tests intelligence"
},
{
    word: "orchestra",
    hint: "Group of musicians playing together"
},
{
    word: "whisper",
    hint: "Soft spoken voice"
},
{
    word: "galaxy",
    hint: "Vast system of stars, gas, dust"
},
{
    word: "mountain",
    hint: "Tall landform with peaks"
},
{
    word: "sparkle",
    hint: "Shine brightly with flashes of light"
},
{
    word: "sculpture",
    hint: "Art form of creating figures or designs"
},
{
    word: "festival",
    hint: "Celebration or event with performances"
},
{
    word: "wonder",
    hint: "Feeling of amazement or admiration"
},
{
    word: "spectrum",
    hint: "Range of colors or ideas"
},
{
    word: "illusion",
    hint: "Deceptive appearance or misleading impression"
},

{
    word: "voyage",
    hint: "Long journey, especially by sea or space"
},

{
    word: "nostalgia",
    hint: "Sentimental longing for the past"
},

{
    word: "labyrinth",
    hint: "A complex and confusing network of passages"
},
{
    word: "conundrum",
    hint: "A confusing and difficult problem or question"
},

{
    word: "bright",
    hint: "Radiating or reflecting light; shining"
},
{
    word: "forgetful",
    hint: "Prone to forgetting or not remembering easily"
},
{
    word: "fragrance",
    hint: "A pleasant, sweet smell"
},
{
    word: "glimmer",
    hint: "Faint or unsteady light"
},

{
    word: "luminous",
    hint: "Radiating light; full of light"
},
{
    word: "marvel",
    hint: "Something that causes wonder or astonishment"
},
{
    word: "gleaming",
    hint: "Shining brightly, especially with reflected light"
},
{
    word: "enigma",
    hint: "A puzzling or inexplicable occurrence or situation"
},
{
    word: "vivid",
    hint: "Bright, distinct, and clear"
},
{
    word: "radiant",
    hint: "Sending out light or heat; shining brightly"
},
{
    word: "melody",
    hint: "Tune or sequence of musical notes"
},
{
    word: "enchanted",
    hint: "Under a spell or charmed"
},
{
    word: "serene",
    hint: "Calm, peaceful, or tranquil"
},
{
    word: "cascade",
    hint: "Small waterfall or series of stages"
},


];

// DOM element references for various elements
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".high-score");
const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");
let correctWord, timer;
var score = 0; // Initializing score

// Fetching highscore from local storage or setting it to 0 if not present
let highscore = localStorage.getItem("high-score") || 0;
highscoreElement.innerText = `High score: ${highscore}`;

// Function to initiate and update the countdown timer
const initTimer = maxTime => {
  clearInterval(timer); // Clearing any existing timer
  timer = setInterval(() => {
      if (maxTime > 0) {
          maxTime--; // Decrease time by 1 second
          return timeText.innerText = maxTime; // Update time text
      }
      clearInterval(timer); // Clear the timer when time's up
      alert(`Times up! ${correctWord.toUpperCase()} was the correct word`); // Alert when time is up
      if (maxTime === 0) {
          // Redirect to the result page with the current score
          location.href = "./result.html?score=" + score;
          var scoreValue = localStorage.setItem("score", score); // Store score in local storage
      }
      initGame(); // Restart the game
  }, 1000); // Interval set to 1 second
};

// Function to initialize the game
const initGame = () => {
  initTimer(30); // Start the timer with 30 seconds
  let randomObj = words[Math.floor(Math.random() * words.length)]; // Select a random word object
  let wordArray = randomObj.word.split(""); // Split the word into an array of characters

  // Shuffle the letters of the word
  for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join(""); // Display the shuffled word
  hintText.innerText = randomObj.hint; // Display the hint for the word
  correctWord = randomObj.word.toLowerCase(); // Store the correct word in lowercase
  inputField.value = "";
  inputField.setAttribute("maxlength", (correctWord.length + 1)); // Set maximum length for input
};

// Function to check if the word entered by the user is correct
const wordCheck = () => {
  let userWord = inputField.value.toLowerCase();
 


  if (userWord === correctWord) {
      score++; // Increment score for correct answer
      highscore = score >= highscore ? score : highscore; // Update high score if necessary
      localStorage.setItem("high-score", highscore); // Store high score in local storage
      scoreElement.innerText = `Score: ${score}`; // Update score displayed on UI
      highscoreElement.innerText = `High score: ${highscore}`; // Update high score displayed on UI
  }

  initGame(); // Restart the game
};

// Function to handle checking the word when the 'Enter' key is pressed
const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
   if(!userWord)return alert("Please enter a word");

  if (userWord === correctWord) {
      score++; // Increment score for correct answer
      highscore = score >= highscore ? score : highscore; // Update high score if necessary
      localStorage.setItem("high-score", highscore); // Store high score in local storage
      scoreElement.innerText = `Score: ${score}`; // Update score displayed on UI
      highscoreElement.innerText = `High score: ${highscore}`; // Update high score displayed on UI
  }

  initGame(); // Restart the game
};

// Event listener for checking the word on button click
checkBtn.addEventListener("click", checkWord);

// Event listener for checking the word when 'Enter' key is pressed
inputField.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      wordCheck(); // Invoke the wordCheck function
  }

  
});

// Initialize the game when the page loads
initGame();
//Adding functionality to refresh button
refreshBtn.addEventListener("click", initGame);
