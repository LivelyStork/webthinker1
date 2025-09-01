let bgMusic, soundEffect, staticImage;
let staticX, staticY, 

function preload() {
    bgMusic = loadSound('assets/star_wars_theme_8_bit.mp3')
    soundEffect = loadSound('assets/bossaNova.mp3')
    staticImage = loadImage('assets/pico-a.png')
}

function setup() {
    createCanvas(300,300)
    bgMusic.loop()
}
function draw() {
    background('lightblue')
    image(staticImage, 0, 0, 110, 133)
}

function keyPressed() {
    if (keyCode === 32) {
        soundEffect.play()
    }
}