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
    if (keyCode === RIGHT_ARROW && !currentPiece.canCollideSides(RIGHT_ARROW)) 
        currentPiece.x += boxDimension
    if (keyCode === LEFT_ARROW && !currentPiece.canCollideSides(LEFT_ARROW)) 
        currentPiece.x -= boxDimension
    if (keyCode === DOWN_ARROW) 
        applyGravity()
}

let applyGravity = () => {
    if(!currentPiece.canCollideBottom()){
        currentPiece.y += boxDimension
    } else {
        platform.placePiece(currentPiece)
        generateNewPiece()
    }
}

let generateNewPiece = () => {
    let index = Math.floor((Math.random() * 7))
    currentPiece = new Piece(pieces[index], width / 2, boxDimension, purpleColor)
}

