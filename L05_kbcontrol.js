// let rancolor = 'blue'; 
// let size = '10'
// let x = 200
let ball = {
    x:300,
    y:200,
    size:40,
    speed:5,
    boost:10
}
let shapeColor = 'blue';
function setup() {
    createCanvas(600, 400);
   // background(220);
}

// function mousePressed () {
//     size = 10;
//     rancolor = color(random(255), random(255), random(255));
// }

// function mouseDragged () {
//     noStroke();
//     fill(rancolor);
//     circle(mouseX, mouseY, size);
//     size += 0.3
// }

// let rectSize = 50;

// function draw () {
//     background (220);
//     rect(width/2 - rectSize/2, height/2 - rectSize/2, rectSize, rectSize);
// }

// function keyPressed() {
//     rectSize = 100;
// }

// function keyReleased() {
//     rectSize = 50;
// }

// console.log(1 == 1)

// let showCircle = false;
// let showSquare = false;
// let showTriangle = false;

function draw () {
    background(220);
    fill(shapeColor);
    circle(ball.x, height/2, 100);
    if(keyIsDown(LEFT_ARROW)){
        if(keyIsDown)
        ball.x-=5
    }
    if(keyIsDown(RIGHT_ARROW)){
        ball.x+=5;
    }
    if(keyIsDown(UP_ARROW)){
        ball.y-=5
    }
    if(keyIsDown(DOWN_ARROW)){
        ball.y+=5;
    }
    if(ball.x<50){
        ball.x=50
    }
    if(ball.x>width-50){
        ball.x=width-50
    }
    // if(showCircle) {
    //     circle(width/2, height/2, 100);
    // }
    // if(showSquare) {
    //     rect(width/2 - 50, height/2 - 50, 100,100);
    // }
    // if (showTriangle) {
    //     triangle(width/2 - 50, height/2 + 30, width/2, height/2-50, width/2+50, height/2+50)
    //}

//     if(key === 'c' || key === 'C') {
//         circle(width/2, height/2, 100);
//     }
//     if(key === 't' || key === 'T') {
//         triangle(width/2 - 50, height/2 + 50, width/2, height/2-50, width/2 + 50, height/2 + 50);
//     }

//     if(key === 's' || key === 'S') {
//         rect(width/2 - 25, height/2 - 25, 50, 50); 
//     }
// }

function keyPressed() {
    // if(key === 'c') {
    //     showCircle = !showCircle;
    // }
    // if (key === 's') {
    //     showSquare = !showSquare
    // }
    // if (key === 't') {
    //     showTriangle = !showTriangle
    // }
    
}

// function keyPressed() {
//     console.log("key: ", key);
//     console.log("keyCode: ", keyCode);

//     if(keyCode === 38) {
//         shapeColor = 'red';
//     }
//     if (keyCode === 40) {
//         shapeColor = 'black';
//     }
}