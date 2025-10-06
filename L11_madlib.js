let colorTextPicker;
let inputText;
let userText;

function setup() {
    createCanvas(600,400);

    colorTextPicker = createColorPicker();
    colorTextPicker.position(300,300)
    inputText = createInput();
    inputText.position(300, 200)
    inputText.input(userTextUpdate);
}

function draw() {
    background(220)
    textSize(24);
    text("Enter text here: ", 100, 200)
    fill(colorTextPicker.value())
    text(userText, 300, 100)
}

function userTextUpdate() {
    userText = this.value();
}