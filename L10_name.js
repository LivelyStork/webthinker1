// let bgcolor = 'gray'
// let interval

// function setup() {
//     createCanvas(600,400)
//     fill(0)
//     textAlign(CENTER,CENTER)
//     interval = setInterval(changeBg, 1000)
// }
//  function draw() {
//     background(bgcolor)
//     let s = 59 - second()
//     textSize(100)
//     text(s, width/2, height/2)
//  }

//  function changeBg() {
//     bgcolor = color(random(0,255), random(0,255), random(0,255))
//  }

//  let inputText
//  let userText = "Enter text here"

//  function setup() {
//      createCanvas(600,400);

//      inputText = createInput();
//      inputText.position(width/2-100, height-80);
//      inputText.input(userTextUpdate);

//  }

//  function draw() {
//     background(220);

//     fill(0);
//     textSize(24);
//     textAlign(CENTER, CENTER);
//     text(userText, width/2, height/2);

//     textSize(18);
//     textAlign(LEFT, BOTTOM);
//     text("Enter text here", 50, height-60);
//  }

//  function userTextUpdate() {
    
//     userText = this.value();
 
//  }

// let colorPicker;

// function setup() {
//     createCanvas(600,400);

//     colorPicker = createColorPicker();
//     colorPicker.position(300,300);
// }

// function draw() {
//     background(colorPicker.value());
//     fill(0);
//     textSize(16);
//     textAlign(LEFT);
//     text("Pick a color: ", 50, 300+15);

//     fill(255);
//     rect(50,100,500,160,20)
// }

// let inputText;
// let userText = "Enter text here";
// let inputAge;
// let userAge = "Enter text here";
// let colorPicker;

//  function setup() {
//      createCanvas(600,600);

//      inputText = createInput();
//      inputText.position(width/2-100, height-180);
//      inputText.input(userTextUpdate);
//      inputAge = createInput();
//      inputAge.position(width/2-100, height-80);
//      inputAge.input(userAgeUpdate);
//      colorPicker = createColorPicker();
//      colorPicker.position(300,300);

//  }

//  function draw() {
//     background(220);
//     background(colorPicker.value());
//     fill(0);
//     textSize(16);
//     textAlign(LEFT);
//     text("Pick a background color: ", 50, 300+15);

//     fill(255);
//     rect(50,100,500,160,20)

//     fill(0);
//     textSize(24);
//     textAlign(CENTER, CENTER);
//     text(userAge, 300, 200);
//     text(userText, 300, 130);

//     textSize(18);
//     textAlign(LEFT, BOTTOM);
//     text("What is your age?", 30, height-80);
//     text("What is your name?", 30, height-180);

//  }

//  function userTextUpdate() {
    
//     userText = this.value();
 
//  }

//  function userAgeUpdate() {
    
//     userAge = this.value();
 
//  }

let inputText;
let userText = "Enter text here";
let inputAge;
let userAge = "Enter text here";
let colorPicker;
let colorPicker1;
let colorPicker2;

 function setup() {
     createCanvas(600,600);

     inputText = createInput();
     inputText.position(width/2-100, height-180);
     inputText.input(userTextUpdate);
     inputAge = createInput();
     inputAge.position(width/2-100, height-80);
     inputAge.input(userAgeUpdate);
     colorPicker = createColorPicker();
     colorPicker.position(300,300);
     colorPicker1 = createColorPicker();
     colorPicker1.position(500,350);
     colorPicker2 = createColorPicker();
     colorPicker2.position(500,500);
 }

 function draw() {
    background(220);
    background(colorPicker.value());
    fill(colorPicker1.value());
    textSize(16);
    textAlign(LEFT);
    text("Pick a background color: ", 50, 300+15);

    fill(255);
    rect(50,100,500,160,20)

    fill(colorPicker1.value());
    textSize(24);
    textAlign(CENTER, CENTER);
    text(userAge, 300, 200);
    text(userText, 300, 130);

    textSize(18);
    textAlign(LEFT, BOTTOM);
    text("What is your age?", 30, height-80);
    text("What is your name?", 30, height-180);
    textAlign(CENTER, CENTER)
    text("Pick a text color:", 500, 300)
    text("Pick a box color:", )

 }

 function userTextUpdate() {
    
    userText = this.value();
 
 }

 function userAgeUpdate() {
    
    userAge = this.value();
 
 }