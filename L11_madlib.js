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
let input2;
let input3;
let input4;
let input5;
let button;
let message;


function setup() {
    createCanvas(600,400);

    input1 = createInput();
    input1.position(width/2 - input1.width/2, 50);

    input2 = createInput();
    input2.position(width/2 - input1.width/2, 100);

    input3 = createInput();
    input3.position(width/2 - input1.width/2, 150);

    input4 = createInput();
    input4.position(width/2 - input1.width/2, 200);

    input5 = createInput();
    input5.position(width/2 - input1.width/2, 250);

    button = createButton('Generate Story');
    button.position(width/2 - button.width/2, 300);
    button.mousePressed(displayText)
}

let arr = ["Noun", "Verb", "Adj", "Adv.", "Place"]

function draw() {
    background(220);

    textSize(15);
    

    textSize(30);
    textAlign(CENTER, CENTER)
    text("Noun: " + message, width/2, height - 200)
}

function displayText() {
    message = input1.value();
}