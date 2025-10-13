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

function setup() {
    createCanvas(600,400);
    background('blue')
}

function draw() {
    fill('red')
    ellipse(40, xball, 200)
    xball += 2
    if(xball>560) {
        
    }
}