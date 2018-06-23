let currentPiece

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    currentPiece = new Piece(piece_T, width / 2, boxDimension, purpleColor)
}

function draw() {
    background(backgroundColor)
    currentPiece.show()
}

function keyPressed() {
    if (keyCode === UP_ARROW) 
        currentPiece.rotation()
  }

