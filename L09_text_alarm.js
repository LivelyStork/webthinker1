let xPos = 0
function setup () {
    createCanvas(600,400);
    background(220)
}

function draw () {
    text("Bounce!", xPos, 200)
    xPos
    if (xPos > 600) {
        xPos -=5
    }
}