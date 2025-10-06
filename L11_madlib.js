let colorTextPicker;
let inputText;
let userText;

function setup() {
    createCanvas(600,400);

    colorTextPicker = createColorPicker();
    colorPicker.position(300,300)
    inputText = createInput();
    inputText.position(300, 200)
    inputText.input(userTextUpdate);
}

function draw() {
    textSize(24);
    text("Enter text here: ", 100, 200)
    fill(colorPicker.value())
    text()
}