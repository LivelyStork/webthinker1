let favFood = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"]; 
let yPos; 
let tSize = 24

function setup() {
    createCanvas(600, 400); 
    textSize(tSize); 
    textAlign(CENTER, CENTER); 
    yPos = height; 
    fill(255, 255, 0); 
}

function draw() {
    

    background(0); 
    // while (yPos == height - 600) {
    translate(width/2,yPos); 
        scale(1,3); 

        yPos -= 0.8;  

        text("My favourite foods are: ", 0, -25); 
        for(let i=0; i<favFood.length; i++) {
            text((i+1) + "." + favFood[i], 0, 50 + i*30); 
            //text((i+1) + "." + favFood[i], 50 + i*100, 80); 
        }
    if (yPos <= -(50 + favFood.length*30 + tSize/2 + height)) {
        yPos = height

        translate(width/2,yPos); 
        scale(1,3); 

        yPos -= 0.8;  

        text("My favourite foods are: ", 0, -25); 
        for(let i=0; i<favFood.length; i++) {
            text((i+1) + "." + favFood[i], 0, 50 + i*30); 
            //text((i+1) + "." + favFood[i], 50 + i*100, 80); 
        }
    }
}