// function setup() {
//     createCanvas(600,400);
   
//     textSize(36)
//     // text("My name is Utkarsh", 50,50);
//     // text("My age is 12", 50,100);
//     // text("My favorite activity is reading", 50,150);
// }
// let favFood = ["Rice", "Noodles", "Dumplings", "Sushi", "This is not accurate"]
// function draw() {
//     background(220);
//     let food = 0
//     let valueY = height+50+food*50
//     translate(width/2,valueY)
//     for(let food = 0; food<favFood.length; food++) {
//         valueY -=2*food
//         text("My Favorite Food:", 50, height)
//         text((food+1) + ". " + favFood[food], 50, valueY)
//     }
// }

let favFood = ["Pizza", "Burger", "Sushi", "Tacos", "Pasta"]; 
let yPos; 

function setup() {
    createCanvas(600, 400); 
    
    textSize(24); 
    textAlign(CENTER, CENTER); 
    yPos = height; 
    fill(255, 255, 0); 
}

function draw() {
    

    background(0); 
    
    translate(width/2,yPos); 
    scale(1,3); 

    yPos -= 0.8;  

    text("My favourite foods are: ", 0, 0); 
    for(let i=0; i<favFood.length; i++) {
        text((i+1) + "." + favFood[i], 0, 50 + i*30); 
        //text((i+1) + "." + favFood[i], 50 + i*100, 80); 
    }
}