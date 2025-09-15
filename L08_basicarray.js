function setup() {
    createCanvas(600,400);
    background(220);
    textSize(36)
    // text("My name is Utkarsh", 50,50);
    // text("My age is 12", 50,100);
    // text("My favorite activity is reading", 50,150);
}
let favFood = ["Rice", "Noodles", "Dumplings", "Sushi", "This is not accurate"]
let valueY = height+food*50
function draw() {
    text("My Favorite Food:", 50, height)
    for(let food = 0; food<favFood.length; food++) {
        text((food+1) + ". " + favFood[food], 50, valueY)
    }
    valueY -=2
}