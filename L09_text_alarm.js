let xPos = 0
function setup () {
    createCanvas(600,400);
    background(220)
}

function draw () {
    if (xPos > 590) {
        xPos -=5
    }
    if (xPos < 10) {
        xPos +=5
    }
    background(220)
    text("Bounce!", xPos, 200)
}