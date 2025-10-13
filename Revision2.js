// let arr = ["pizza", "apples", "juice", "tissues"];

// function setup() {
//     createCanvas(600,400);
//     background('black')
// }

// function draw() {
//     fill('orange')
//     textAlign(CENTER)
//     textSize(24);
//     for(let i=0; i<arr.length; i++) {
//         text(arr[i], 300, i*50 + 70)
//     }
// }
let xball = 300
let speed = 2

function setup() {
    createCanvas(600,400);
    background('blue')
}

function draw() {
    background('blue')
    fill('red')
    ellipse(xball, 200, 40)
    xball += speed
    if(xball=20) {
        speed *= -1
    }
    if(xball=580) {
        speed *= -1
    }
}