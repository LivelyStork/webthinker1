function setup() {
    createCanvas(600, 400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
let x = 50
let y = 50
let green = 0
for (let i = 0; i < 5; i++) {
    fill(0,green,0)
    circle(x,y,30)
    x = x + 50
    y = y + 50
    green = green
}

}
