let currentPiece
let platform
let points

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    generateNewPiece()
    platform = new Platform()
    setInterval( () =>  applyGravity() , timeInterval)
    points = startingPoints
}

function draw() {
    background(backgroundColor)
    platform.show()
    currentPiece.show()
    drawText(points)
}

function keyPressed() {
    if (keyCode === UP_ARROW) 
        currentPiece.rotation()
    if (keyCode === RIGHT_ARROW && !currentPiece.canCollide(box => box.x + boxDimension === width) && !platform.piecesColliding(currentPiece, (rect1, rect2) => rectCollision(rect1, rect2), (box) => box.x += boxDimension)) 
        currentPiece.x += boxDimension
    if (keyCode === LEFT_ARROW && !currentPiece.canCollide(box => box.x === begginingPoint) && !platform.piecesColliding(currentPiece, (rect1, rect2) => rectCollision(rect1, rect2), (box) => box.x -= boxDimension)) 
        currentPiece.x -= boxDimension
    if (keyCode === DOWN_ARROW) 
        applyGravity()
}

let applyGravity = () => {
    if(!currentPiece.canCollide(box => box.y + boxDimension === height) && !platform.piecesColliding(currentPiece)){
        currentPiece.y += boxDimension
    } else {
        currentPiece.canCollide(box => box.y === begginingPoint) ? setup() : platform.placePiece(currentPiece); platform.cleanFilledRows(); generateNewPiece() //Colliding on top of the screen
    }
}

let generateNewPiece = () => {
    let index = Math.floor((Math.random() * pieces.length))
    let indexColor = Math.floor((Math.random() * colors.length))
    currentPiece = new Piece(pieces[index], width / 2, -boxDimension * marginPieceBeginning, colors[indexColor])
}

let drawText = (txt) => {
    textSize(16)
    textAlign(RIGHT)
    fill(255, 255, 255)
    text(txt, canvasWidth, boxDimension)
}

