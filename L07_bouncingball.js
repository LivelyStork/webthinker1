function setup() {
    createCanvas(600,400);
    background(220);
}

let soundEffect, staticImage;

let staticX = 0;
let staticY = 0;
let staticSpeed = 1;
let picoWidth = 50;

function preload() {
    soundEffect = loadSound('assets/pop.mp3')
    staticImage = loadImage('assets/pico-a.png');
}
function draw() {
    background('lightblue');
    staticX = constrain(staticX,0,width-picoWidth);
    staticY = constrain(staticY,0,height-50);
    image(staticImage, staticX, staticY, picoWidth, 50);
    if(keyIsDown(LEFT_ARROW)) {
        staticX -=staticSpeed;
    }
    if(keyIsDown(RIGHT_ARROW)) {
        staticX +=staticSpeed;
    }
    if(keyIsDown(DOWN_ARROW)) {
        staticY +=staticSpeed;
    }
    if(keyIsDown(UP_ARROW)) {
        staticY -=staticSpeed;
    }
}
function keyPressed() {
    if(keyCode === 32) {
        picoWidth = picoWidth/2
        soundEffect.play()
    }
}
function keyReleased() {
    if(keyCode === 32) {
        picoWidth = picoWidth*2
    }
}