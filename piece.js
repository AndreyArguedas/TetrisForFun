class Piece {
    constructor(originalShape = [[]], x = 0, y = 0, color = {r : 0, g : 0, b : 0}){
        this.originalShape = originalShape
        this.shape = this.fillPiece(originalShape.length)
        this.color = color
        this.x = x
        this.y = y
        
    }

    fillPiece(pieceLength){
        return Array.from(new Array(pieceLength), (x, i) => 
            Array.from(new Array(pieceLength), (x, j) =>  
            this.originalShape[i][j] === 1 ? new Box() : null)
        )
    }

    show(){
        let actualColor = this.color
        let dimension = this.shape.length
        fill(actualColor.r, actualColor.g, actualColor.b)
        rect(this.x, this.y, dimension * boxDimension, dimension * boxDimension)
    }
}