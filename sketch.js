let currentPiece

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    currentPiece = new Piece(piece_I, width / 2, boxDimension, purpleColor)
    setInterval( () =>  applyGravity() , timeInterval)
}

function draw() {
    background(backgroundColor)
    currentPiece.show()
}

function keyPressed() {
    if (keyCode === UP_ARROW) 
        currentPiece.rotation()
    if (keyCode === RIGHT_ARROW && !currentPiece.canCollideSides(RIGHT_ARROW)) 
        currentPiece.x += boxDimension
    if (keyCode === LEFT_ARROW && !currentPiece.canCollideSides(LEFT_ARROW)) 
        currentPiece.x -= boxDimension
    if (keyCode === DOWN_ARROW) 
        applyGravity()
}

function applyGravity() {
    currentPiece.y += boxDimension
    if(currentPiece.y >= height)
        generateNewPiece()
}

function generateNewPiece() {
    let index = Math.floor((Math.random() * 7))
    currentPiece = new Piece(pieces[index], width / 2, boxDimension, purpleColor)
}

