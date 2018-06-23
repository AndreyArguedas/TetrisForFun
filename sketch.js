let p
function setup() {
    createCanvas(canvasWidth, canvasHeight)
    p = new Piece(piece_S, width / 2, height / 2, purpleColor)
}

function draw() {
    background(backgroundColor)
    p.show()
}

