let xPos = 0
let speed = 5
function setup () {
    createCanvas(600,400);
    background(220)
}

function draw () {
    background(220)
    text("Bounce!", xPos, 200)
    xPos += speed
    if (xPos > 590 || xPos < 10) {
        speed *=-1
    }
}