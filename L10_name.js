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

let colorPicker;

function setup() {
    createCanvas(600,400);

    colorPicker = createColorPicker();
    colorPicker.position(300,300);
}

function draw() {
    background(220);
    fill(0);
    textSize(16);
    textAlign(LEFT);
    text("Pick a color: ", 50,  )
}