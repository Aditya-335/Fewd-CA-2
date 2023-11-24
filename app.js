const words = [
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
    

    ]
    const scoreElement = document.querySelector(".score")
    const highscoreElement = document.querySelector(".high-score") 
    const wordText = document.querySelector(".word")
    const hintText = document.querySelector(".hint span")
    const timeText = document.querySelector(".time b")
    const inputField = document.querySelector("input")
    const refreshBtn = document.querySelector(".refresh-word")
    const checkBtn = document.querySelector(".check-word")
    let correctWord,timer;
    var score=0;

    let highscore = localStorage.getItem("high-score")||0;
    highscoreElement.innerText = `High score:${highscore}`;
    
    const initTimer = maxTime =>{
        clearInterval(timer);
        timer = setInterval(()=>{
            if(maxTime>0){
                maxTime--;
               return timeText.innerText = maxTime;
            }
            clearInterval(timer);
            alert(`Times up! ${correctWord.toUpperCase()} was the correct word`)
            if(maxTime===0){
                location.href ="./result.html?score=" + score;
                var scoreValue = localStorage.setItem("score", score);
            }
            initGame();
        },1000);
    }
    
    const initGame = ()=>{
        initTimer(30);
        let randomObj = words[Math.floor(Math.random()*words.length)];
        let wordArray = randomObj.word.split("");
        for(let i= wordArray.length-1;i>0;i--){
            let j=Math.floor(Math.random()*(i+1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    
        }
        wordText.innerText = wordArray.join("");
        hintText.innerText = randomObj.hint;
        correctWord = randomObj.word.toLowerCase(); 
        inputField.value="";
        inputField.setAttribute("maxlength",(correctWord.length + 1));

        
        
    }
    initGame();

    const wordCheck = () =>{
        let userWord = inputField.value.toLocaleLowerCase();
        

        if(userWord===correctWord){
            score++;

            highscore = score>=highscore? score:highscore;
        localStorage.setItem("high-score",highscore);
        scoreElement.innerText = `Score:${score}`;
        highscoreElement.innerText = `High score:${highscore}`;
        }

         

        initGame();
       
    }
    
    const checkWord = () =>{
        let userWord = inputField.value.toLocaleLowerCase();
        

        if(userWord===correctWord){
            score++;

            highscore = score>=highscore? score:highscore;
        localStorage.setItem("high-score",highscore);
        scoreElement.innerText = `Score:${score}`;
        highscoreElement.innerText = `High score:${highscore}`;
        }

         
inputField.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
     
      wordCheck();
    }
  });
 

    
        

        
        initGame();

        

}
       
    
    refreshBtn.addEventListener("click", initGame);
    checkBtn.addEventListener("click", checkWord);
