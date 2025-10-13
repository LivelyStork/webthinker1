// let colorTextPicker;
// let inputText;
// let userText;

// function setup() {
//     createCanvas(600,400);

//     colorTextPicker = createColorPicker();
//     colorTextPicker.position(300,300)
//     inputText = createInput();
//     inputText.position(300, 200)
//     inputText.input(userTextUpdate);
// }

// function draw() {
//     background(220)
//     textSize(24);
//     fill('black')
//     text("Enter text here: ", 100, 200)
//     textSize(48);
//     fill(colorTextPicker.value())
//     text(userText, 300, 100)
// }

// function userTextUpdate() {
//     userText = this.value();
// }
let input1;
let button;

function setup() {
    createCanvas(600,400);

    input1 = createInput('Enter noun here');
    input1.position(width/2 - input1.width/2, 50);
    button = createButton('Generate Story');
    button.position
}

function draw() {

}