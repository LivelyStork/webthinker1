function setup() {
    createCanvas(600,400);
   
    textSize(36)
    // text("My name is Utkarsh", 50,50);
    // text("My age is 12", 50,100);
    // text("My favorite activity is reading", 50,150);
}
let favFood = ["Rice", "Noodles", "Dumplings", "Sushi", "This is not accurate"]
function draw() {
    background(220);
    let food
    let valueY = height+50+food*50
    translate(width/2,valueY)
    for(let food = 0; food<favFood.length; food++) {
        valueY -=2*food
        text("My Favorite Food:", 50, height)
        text((food+1) + ". " + favFood[food], 50, valueY)
    }
}