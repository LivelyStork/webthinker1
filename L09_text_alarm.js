let xPos = 0
function setup () {
    createCanvas(600,400);
    background(220)
}

function draw () {
    background(220)
    text("Bounce!", xPos, 200)
    xPos +=5
    if (xPos > 600) {
        xPos -=5
    }
    if (xPos < 0) {
        xPos +=5
    }
}