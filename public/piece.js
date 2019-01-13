class Piece {
    constructor(originalShape = [[]], x = 0, y = 0, color = {r : 0, g : 0, b : 0}) {
        this.originalShape = originalShape
        this.color = color
        this.x = x
        this.y = y
        this.shape = this.fillPiece(originalShape.length)
    }

    fillPiece(pieceLength) {
        return Array.from(new Array(pieceLength), (x, i) => 
            Array.from(new Array(pieceLength), (x, j) =>  
            this.originalShape[i][j] === 1 ? new Box(this.x + j * boxDimension, this.y + i * boxDimension, boxDimension, boxDimension, this.color) : null)
        )
    }

    show() {
        this.updatePiecePosition()
        this.shape.forEach( x => x.filter( j => j != null).forEach(box => box.show()))
    }

    canCollide(collision) {
        return this.shape.reduce( (z, x) => z.concat(x.filter(col => col != null).filter(box => collision(box))), []).length > 0
    }

    rotation() {
        this.transpose()
        this.rotate90Degrees()
        this.updatePiecePosition()
    }

    transpose() {
        let dimension = this.shape.length
        let aux = Array.from(new Array(dimension), e => Array.from(new Array(dimension), x => null) )        
        this.shape.forEach( (x, i) => x.forEach( (e, j) => aux [j][i] = e))
        this.shape = aux
    }

    rotate90Degrees() {
        this.shape.reverse()[0].map((column, index) => 
            this.shape.map(row => row[index])
          )
    }

    updatePiecePosition() {
        this.shape.forEach( (x, i) => x.forEach( (e, j) => { if(e) { e.x = this.x + j * boxDimension; e.y = this.y + i * boxDimension; }}))
    }
}