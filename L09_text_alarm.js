let xPos = 0
let speed = 5
function setup () {
    createCanvas(600,400);
    background(220)
}

function draw () {
    if (xPos > 590) {
        xPos -=5
        text("Bounce!", xPos, 200)
    }
    if (xPos < 10) {
        xPos +=5
        text("Bounce!", xPos, 200)
    }
    background(220)
    text("Bounce!", xPos, 200)
}