let attempts = 0;
let hiddenWord = ""; 
let textBox; 
let button; 
let displayWord = ""; 
let message = ""; 
let hint = ""; 
let score = 0; 
let button2; 
let scrambledWord;

let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

function setup() {
    createCanvas(600, 400); 

    pickNewWord(); 

    textBox = createInput(); 
    textBox.size(250, 30);
    textBox.position(width/2 - textBox.width/2, 200); 
    textBox.style("font-size", "24px"); 
    textBox.style("background-color", "lightblue");

    button = createButton('Guess'); 
    button.size(100, 30);
    button.position(textBox.x + textBox.width + 30, 200); 
    button.style("font-size", "16px"); 
    button.mousePressed(checkGuess); 

    button2 = createButton('Rescramble'); 
    button2.size(100, 30);
    button2.position(textBox.x - button2.width - 30, 200); 
    button2.style("font-size", "16px"); 
    button2.mousePressed(sameScramble); 




    //hint = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length-1);
    

}

function draw() {
    background(220); 
    textAlign(CENTER, CENTER); 
    textSize(24); 
    text("Scramble Word Game!", width/2, 50); 
    text("Score: " + score, width/2, 100); 
    text("Scrambled Word: " + scrambledWord, width/2, 150); 
    text(message, width/2, 300);
}

// function displayText() {
//     displayWord = textBox.value(); 
// }

function checkGuess() {
    attempts++; 

    let guess = textBox.value().toLowerCase(); 
    message = getCorrectLetters(guess, hiddenWord); 

    if(guess == hiddenWord) {
        score++; 
        message = "You guessed it right! The word is " + hiddenWord; 
        words.splice(words.indexOf(hiddenWord), 1); 
        pickNewWord(); 
        textBox.value(''); 
    } else {
        
        message = "Try Again"; 
    }

}

function getCorrectLetters(guess,hiddenWord) {
    let correctLetters = ""; 
    for(let i=0; i<hiddenWord.length; i++) {
        if(hiddenWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
            correctLetters += guess[i].toUpperCase(); 
        }
    }
    return correctLetters; 
}


function scramble(word) {
    let arr = word.split(''); 
    for(let i=arr.length-1; i>0; i--) {
        let j = floor(random(i+1)); 
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    return arr.join(''); 
}

function pickNewWord(){
    hiddenWord = random(words); 
    console.log(hiddenWord);

    scrambledWord = scramble(hiddenWord); 
}

function sameScramble() {
    scrambledWord = scramble(hiddenWord); 
}