// let xPos = 0
// let speed = 3
// function setup () {
//     createCanvas(600,400);
//     background(220)
// }

// function draw () {
//     background(220)
//     text("Bounce!", xPos, 200)
//     xPos += speed
//     if (xPos > 550 || xPos < 0) {
//         speed *=-1
//     }
// }

// function setup () {
//     createCanvas(600,400);
//     background(220)
//     fill(0)
//     textSize(50)
//     textAlign(CENTER, CENTER)
// }

// function draw() {
//     background(220)

//     let h = hour()
//     let m = minute()
//     let s = second()

//     let timeString = nf(h,2) + ":" + nf(m,2) + ":" + nf(s,2)
//     text(timeString, width/2, height/2)
// }

let countdown = 5
let interval
let intervalAfter
let bgmusic
bgmusic = loadSound('assets/bossaNova.mp3')
let back

function setup () {
    createCanvas(600,400);
    background(220)
    fill(0)
    textAlign(CENTER, CENTER)
}

function draw() {
    background(220)
    textSize(50)
    text("Click me to start timer", width/2, height-50 )
    textSize(100)
    text(countdown, width/2, height/2)
}

function mousePressed() {
    interval = setInterval(countDownUpdate, 1000)
    intervalAfter = setInterval(timerAfter, 500)
}

function countDownUpdate() {
    if(countdown > 0) {
        countdown -=1
    } else {
        clearInterval(interval)
    }
}

function timerAfter() {
    if(countdown = 0) {
        bgmusic.play
        back = color(random(255), random(255), random(255))
        background(rgb(random(0,225),random(0,225),random(0,225)))
    }
}