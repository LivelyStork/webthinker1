let attempts = 0;
let hiddenWord = "";
let textBox;
let button;

function setup() {
    createCanvas(600,400);

    textBox = createInput();
    textBox.position(width/2 - textBox.width/2, 200);

    button
}

function draw() {
    background(220);
    textAlign(CENTER,CENTER);
    textSize(24);
    text("Guess the word!", width/2, 50);
    text("Attempt: " + attempts, width/2, 50);
    text("Hint: " + hiddenWord, width/2, 150);
}