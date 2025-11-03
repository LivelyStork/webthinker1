let attempts = 0;
let hiddenWord = "";
let textBox;
let button;
let words = ["apple", "mango", "grape", "peach", "melon", "table", "chair", "brick", "cloud", "storm", 
    "beach", "river", "flame", "grass", "skull", "horse", "laser", "brain", "plane", "train"];
let displayWord;

function setup() {
    createCanvas(600,400);

    textBox = createInput();
    textBox.position(width/2 - textBox.width/2, 200);

    button = createButton('Guess');
    button.size(100,30);
    button.position(textBox.x + textBox.width + 30, 200);
    button.mousePressed(displayText);

    hiddenWord = random(words);

    displayWord = hiddenWord[0].toUpperCase() 
}

function draw() {
    background(220);
    textAlign(CENTER,CENTER);
    textSize(24);
    text("Guess the word!", width/2, 50);
    text("Attempt: " + attempts, width/2, 100);
    text("Hint: " + hiddenWord, width/2, 150);
    text(displayWord, width/2, 300);
}

function displayText() {
    displayWord = textBox.value();
}