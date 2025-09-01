let bgMusic, soundEffect, staticImage;

function preload() {
    bgMusic = loadSound('assets\bossaNova.mp3')
    soundEffect = loadSound('assets\pop.mp3')
    staticImage = loadImage('assets\pico-a.png')
}

function setup() {
    createCanvas(300,300)
    bgMusic.loop()
}
function draw() {
    background('lightblue')
    image(staticImage, 0, 0, 110, 133)
}

function keypressed() {
    
}