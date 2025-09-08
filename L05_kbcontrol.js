// write your codes here// let rancolor = 'blue'; 
// let size = '10'
//let shapeColor = 'blue';
// let x = 200;
// let y =200;
// let ball = {
//     x: 300,
//     y: 200,
//     size:40,
//     speed:5,
//     boost:10
// };
//function setup() {
    //createCanvas(600, 400);
   // background(220);
//}

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

// function draw () {
//     background(220);
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

// function keyPressed() {
    // if(key === 'c') {
    //     showCircle = !showCircle;
    // }
    // if (key === 's') {
    //     showSquare = !showSquare
    // }
    // if (key === 't') {
    //     showTriangle = !showTriangle
    // }
    // fill(shapeColor);
    //TAsk 1)declare var x = 200
    //     
//     circle(ball.x, ball.y, ball.size);
    
//     if(keyIsDown(LEFT_ARROW)){
//         if(keyIsDown(SHIFT)){
//             ball.x-= ball.boost; //10
//         }
//         else{
//             ball.x -=ball.speed; //5
//         }
        
//     }
//     if(keyIsDown(RIGHT_ARROW)){
//         if(keyIsDown(SHIFT)){
//             ball.x += ball.boost;
//         }else{
//             ball.x += ball.speed;
//         }
//     }
//     if(keyIsDown(UP_ARROW)){
//         if(keyIsDown(SHIFT)){
//             ball.y -= ball.boost;
//         }else{
//             ball.y -= ball.speed;
//         }
//     }
//     if(keyIsDown(DOWN_ARROW)){
//         if(keyIsDown(SHIFT)){
//             ball.y += ball.boost;
//         }else{
//             ball.y += ball.speed;
//         }
//     }

//     if(ball.x <25){
//         ball.x=25;
//     }
//     if(ball.x>width -25){
//         ball.x = width -25;
//     }
//     //do for right arrow
//     ball.x = constrain(ball.x,0+20,width-20);
//     ball.y = constrain(ball.y, 0+20, height-20);
    
// }

// function keyPressed() {
//     console.log("key: ", key);
//     console.log("keyCode: ", keyCode);

//     if(keyCode === 38) {
//         shapeColor = 'red';
//     }
//     if (keyCode === 40) {
//         shapeColor = 'black';
//     }
    // circle(width/2,height/2,50);
//}

// function keyPressed() {
//     if(key == 'w') {
//         shapeColor = 'white';
//     }
//     else if(key == 'r') {
//         shapeColor = 'red';
//     }
//     else if(key == 'g') {
//         shapeColor = 'green';
//     }
//     else{
//         shapeColor = 'yellow';
//     }
////////////////////////////////////////////

// Moving ball from left, right, top and bottom

let x = 200; 
let y = 200

function setup() {
    createCanvas(400, 400); 
}

function draw() {
    background(220); 

    if(keyIsDown(LEFT_ARROW)) {
        x -=2; 
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x +=2;
    }

    if (x<25) {
        x = 25; 
    }
    if (x>width-25) {
        x = width-25;
    }
    if (keyIsDown(DOWN_ARROW)){
        x-=2
    }
    circle(x, height/2, 50); 

}