// let xPos = 0
// let speed = 3
// function setup () {
//     createCanvas(600,400);
//     background(220)
// }

// function draw () {
//     background(220)
//     text("Bounce!", xPos, 200)
//     xPos += speed
//     if (xPos > 550 || xPos < 0) {
//         speed *=-1
//     }
// }

// function setup () {
//     createCanvas(600,400);
//     background(220)
//     fill(0)
//     textSize(50)
//     textAlign(CENTER, CENTER)
// }

// function draw() {
//     background(220)

//     let h = hour()
//     let m = minute()
//     let s = second()

//     let timeString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2)
//     text(timeString, width/2, height/2)
// }

function setup () {
    createCanvas(600,400);
    background(220)
    fill(0)
    textSize(50)
    textAlign(CENTER, CENTER)
}

function draw() {
    text("Click me ")
}