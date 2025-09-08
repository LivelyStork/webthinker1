function setup() {
    createCanvas(600,400);
    background(220);
}

let soundEffect, staticImage;

let staticX = 0;
let staticY = 0;
let staticSpeed = 1;

function preload() {
    soundEffect = loadSound('assets/pop.mp3')
    staticImage = loadImage('assets/pico-a.png');
}