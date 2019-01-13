let angle = 0

function setup() {
    createCanvas(600, 600)
    angleMode(DEGREES)
}

function draw() {
    background(50)
    rectMode(CENTER)
    translate(150, height / 2)
    rotate(angle)
    rect(150, height / 2, 55, 55)
    angle++   
}