function setup() {
    createCanvas(600, 400);
    background(220);
    // noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // circle(75,100,100);
  // circle(200,100,100);
  // circle(325,100,100);
  // circle(450,100,100);
let spacing = 50;
// let colorValue = 1;
// for (let i = 5; i > 0; i--) {
// for (let i = 0; i < 5; i++) {
//    if(i%2==0) {
//      fill(0);
//    }
//   else {
//     fill(255);
//   }
// // fill(colorValue * 50);
// // fill(255-(i*50));
// rect(spacing + i * spacing,100,50,50)
// colorValue = colorValue + 1
  // noStroke()
  // fill(colorValue%255);
  // fill(colorValue * 255)
  // circle(spacing + i * spacing,100,40);
  // if (colorValue * 255 == 0)
  // colorValue +=1;
  // else
  //   colorValue -=1
// }
  // Recap 1: Repeating Circles

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
// rect(0, 50, width, height-100)
// circle(width/2, height/2, 100)
  // let circleDiameter = 50;
  // let circleNum = 5;
  // let total = circleDiameter*circleNum;
  // let startX = (width - total)/2 + circleDiameter/2; 
  // for (let i = 0; i < circleNum; i++) {
  //   circle(startX + i*circleDiameter, height/2, circleDiameter);
  // }
  //  let circleDiameter = 50;
  // let circleNum = 5;
  // let total = circleDiameter*circleNum;
  // let startX = (width - total)/2 + circleDiameter/2; 
  // for (let i = 0; i < circleNum; i++) {
  //   circle(circleDiameter/2 + i*circleDiameter,circleDiameter/2, circleDiameter);
  // }
  let circleDiameter = 30
  let circleNum = 5
  let total = circleNum * circleDiameter
  let startX = (width - total)/2 + circleDiameter/2; 
  let startY = (height - total)/2 + circleDiameter/2; 
  for (let row = 0; row < numCircles; row++) {
    let rowY = startY + row * circleDiameter

    for (let i = 0; i < numcircles; i++) {
      circle(startX + )
    }
  }
}

//light to dark shade fill(255-(i*50));

// let circleDiameter = 50;
//     let numCircles = 5;
//     let totalWidth = numCircles * circleDiameter
//     let startX = (width - totalWidth) / 2;
//     for (let i = 0; i < numCircles; i++) {
//         circle(startX + i * circleDiameter, height / 2, circleDiameter);
//   }