//let bgMusic, soundEffect;
let staticImage;
let staticX = 0;
let staticY = 0;
let staticSpeed = 1;

function preload() {
    // bgMusic = loadSound('assets/star_wars_theme_8_bit.mp3')
    soundEffect = loadSound('assets/pop.mp3')
    staticImage = loadImage('assets/pico-a.png');
}

function setup() {
    createCanvas(300,300);
//     bgMusic.loop()
}
function draw() {
    background('lightblue');
    staticX = constrain(staticX,0,width-50);
    staticY = constrain(staticY,0,height-50);
    image(staticImage, staticX, staticY, 50, 50);
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
    if (keyCode === 32) {
        soundEffect.play()
    }
}