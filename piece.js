class Piece {
    constructor(originalShape = [[]], x = 0, y = 0, color = {r : 0, g : 0, b : 0}) {
        this.originalShape = originalShape
        this.color = color
        this.x = x
        this.y = y
        this.shape = this.fillPiece(originalShape.length)
    }

    fillPiece(pieceLength) {
        console.log(this.color)
        return Array.from(new Array(pieceLength), (x, i) => 
            Array.from(new Array(pieceLength), (x, j) =>  
            this.originalShape[i][j] === 1 ? new Box(this.x + j * boxDimension, this.y + i * boxDimension, boxDimension, boxDimension, this.color) : null)
        )
    }

    show() {
        let actualColor = this.color
        let dimension = this.shape.length
        this.shape.forEach( x => x.filter( j => j != null).forEach(box => box.show()))
    }

    rotation() {
        this.transpose()
        this.updatePiecePosition()
    }

    transpose() {
        let dimension = this.shape.length
        let aux = Array.from(new Array(dimension), e => Array.from(new Array(dimension), x => null) )        
        this.shape.forEach( (x, i) => x.forEach( (e, j) => aux [j][i] = e))
        this.shape = aux
    }

    updatePiecePosition() {
        let dimension = this.shape.length
        this.shape.forEach( (x, i) => x.forEach( (e, j) => { if(e) { e.x = this.x + j * boxDimension; e.y = this.y + i * boxDimension; }}))
    }
}