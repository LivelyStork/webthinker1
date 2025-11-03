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
// let input1;
// let input2;
// let input3;
// let input4;
// let input5;
// let button;
// let message1;
// let message2;
// let message3;
// let message4;
// let message5;


// function setup() {
//     createCanvas(600,600);

//     input1 = createInput();
//     input1.position(width/2 - input1.width/2, 50);

//     input2 = createInput();
//     input2.position(width/2 - input1.width/2, 100);

//     input3 = createInput();
//     input3.position(width/2 - input1.width/2, 150);

//     input4 = createInput();
//     input4.position(width/2 - input1.width/2, 200);

//     input5 = createInput();
//     input5.position(width/2 - input1.width/2, 250);

//     button = createButton('Generate Story');
//     button.position(width/2 - button.width/2, 300);
//     button.mousePressed(displayText)
// }

// let arr = ["Noun", "Verb", "Adj", "Adv.", "Place"]

// function draw() {
//     background(220);

//     textSize(15);
//     for(let i=0; i<arr.length; i++) {
//         text(arr[i], 50, 50 + 10 + i*50)
//     }

//     textSize(30);
//     textAlign(CENTER, CENTER)
//     text("Noun: " + message1, width/2, height - 250)
//     text("Verb: " + message2, width/2, height - 200)
//     text("Adj.: " + message3, width/2, height - 150)
//     text("Adv.: " + message4, width/2, height - 100)
//     text("Place: " + message5, width/2, height - 50)
// }

// function displayText() {
//     message1 = input1.value();
//     message2 = input2.value();
//     message3 = input3.value();
//     message4 = input4.value();
//     message5 = input5.value();
// }

//////////////////////////////////////////////

// task 2

let storyTemplates; 
let storyText;
let input1;
let input2;
let input3;
let input4;
let input5;
let button;
let message1;
let message2;
let message3;
let message4;
let message5;


function setup() {
    createCanvas(600,600);

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

    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
];

}

let arr = ["Noun", "Verb", "Adj", "Adv.", "Place"]

function draw() {
    background(220);

    textSize(15);
    for(let i=0; i<arr.length; i++) {
        text(arr[i], 50, 50 + 10 + i*50)
    }

    textSize(30);
    textAlign(CENTER, CENTER)
    text("Noun: " + message1, width/2, height - 250)
    text("Verb: " + message2, width/2, height - 200)
    text("Adj.: " + message3, width/2, height - 150)
    text("Adv.: " + message4, width/2, height - 100)
    text("Place: " + message5, width/2, height - 50)
}

function displayText() {
    let template = random(storyTemplates);
    message1 = input1.value();
    message2 = input2.value();
    message3 = input3.value();
    message4 = input4.value();
    message5 = input5.value();
}
