let currentPiece
let platform

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    generateNewPiece()
    platform = new Platform()
    setInterval( () =>  applyGravity() , timeInterval)
}

function draw() {
    background(backgroundColor)
    platform.show()
    currentPiece.show()
}

function keyPressed() {
    if (keyCode === UP_ARROW) 
        currentPiece.rotation()
    if (keyCode === RIGHT_ARROW && !currentPiece.canCollide(box => box.x + boxDimension === width) && !platform.piecesColliding(currentPiece, (rect1, rect2) => rectCollision(rect1, rect2), (box) => box.x += boxDimension)) 
        currentPiece.x += boxDimension
    if (keyCode === LEFT_ARROW && !currentPiece.canCollide(box => box.x === 0) && !platform.piecesColliding(currentPiece, (rect1, rect2) => rectCollision(rect1, rect2), (box) => box.x -= boxDimension)) 
        currentPiece.x -= boxDimension
    if (keyCode === DOWN_ARROW) 
        applyGravity()
}

let applyGravity = () => {
    if(!currentPiece.canCollide(box => box.y + boxDimension === height) && !platform.piecesColliding(currentPiece)){
        currentPiece.y += boxDimension
    } else {
        platform.placePiece(currentPiece)
        generateNewPiece()
    }
}

let generateNewPiece = () => {
    let index = Math.floor((Math.random() * pieces.length))
    let indexColor = Math.floor((Math.random() * colors.length))
    currentPiece = new Piece(pieces[index], width / 2, -boxDimension * marginPieceBeginning, colors[indexColor])
}

