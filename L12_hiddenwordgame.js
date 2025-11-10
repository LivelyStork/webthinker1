// let attempts = 0;
// let hiddenWord = "";
// let textBox;
// let button;
// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];
// let displayWord;
// let message = "";
// let hint = "";

// function setup() {
//     createCanvas(600,400);

//     textBox = createInput();
//     textBox.position(width/2 - textBox.width/2, 200);

//     button = createButton('Guess');
//     button.size(100,30);
//     button.position(textBox.x + textBox.width + 30, 200);
//     button.mousePressed(checkGuess);

//     hiddenWord = random(words);

//     hint = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length-1)
// }

// function draw() {
//     background(220);
//     textAlign(CENTER,CENTER);
//     textSize(24);
//     text("Guess the word!", width/2, 50);
//     text("Attempts: " + attempts, width/2, 100);
//     text("Hint: " + hint, width/2, 150);
//     text(message, width/2, 300);
// }

// // function displayText() {
// //     displayWord = textBox.value();
// // }

// function checkGuess() {
//     attempts++;

//     let guess = textBox.value().toLowerCase();
//     message = getCorrectLetters(guess, hiddenWord);

//     if(guess == hiddenWord) {
//         message = "You guessed it right! The word is " + hiddenWord;
//     } else if(guess.length != 5) {
//         message = "5 Letters Only!"
//     } else {
//         message = "Try Again. The letter(s) you got right is/are " + message;
//     }
// }

// function getCorrectLetters(guess, hiddenWord) {
//     let correctLetters = "";
//     for(let i=0;i<hiddenWord; i++) {
//         if(hiddenWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase();
//         }
//     }

// }
////////////////////////////////////////////////////////////

// let attempts = 0;
// let hiddenWord = ""; 
// let textBox; 
// let button; 
// let displayWord = ""; 
// let message = ""; 
// let hint = ""; 

// let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
//     "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];

// function setup() {
//     createCanvas(600, 400); 

//     textBox = createInput(); 
//     textBox.size(250, 30);
//     textBox.position(width/2 - textBox.width/2, 200); 
//     textBox.style("font-size", "24px"); 
//     textBox.style("background-color", "lightblue");

//     button = createButton('Guess'); 
//     button.size(100, 30);
//     button.position(textBox.x + textBox.width + 30, 200); 
//     button.style("font-size", "24px"); 
//     button.mousePressed(checkGuess); 

//     hiddenWord = random(words); 
//     console.log(hiddenWord);

//     hint = hiddenWord[0].toUpperCase() + " " + "_ ".repeat(hiddenWord.length-1);
    

// }

// function draw() {
//     background(220); 
//     textAlign(CENTER, CENTER); 
//     textSize(24); 
//     text("Guess the Word!", width/2, 50); 
//     text("Attempt: " + attempts, width/2, 100); 
//     text("Hint: " + hint, width/2, 150); 
//     text(message, width/2, 300);
// }

// // function displayText() {
// //     displayWord = textBox.value(); 
// // }

// function checkGuess() {
//     attempts++; 

//     let guess = textBox.value().toLowerCase(); 
//     message = getCorrectLetters(guess, hiddenWord); 

//     if(guess == hiddenWord) {
//         message = "You guessed it right! The word is " + hiddenWord; 
//     } else if (guess.length != 5) {
//         message = "5 Letters Only!"
//     } else {
//         message = "Try Again. The letter(s) you got it right is/are " + message; 
//     }

// }

// function getCorrectLetters(guess,hiddenWord) {
//     let correctLetters = ""; 
//     for(let i=0; i<hiddenWord.length; i++) {
//         if(hiddenWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
//             correctLetters += guess[i].toUpperCase(); 
//         }
//     }
//     return correctLetters; 
// }
