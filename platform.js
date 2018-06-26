class Platform {
    constructor(platform = [[]], x = 0, y = 0, dimension = boxDimension, color = {r : 255, g : 255, b : 255}) {
        this.platform = platform
        this.dimension = dimension
        this.color = color
        this.x = x
        this.y = y
        this.generatePlatform()
    }

    show() {
        this.platform.forEach( (row, i) => row.forEach( (box, j) => box === null ? this.showEmptyBox() : box.show()))
    }

    generatePlatform() {
        let platformLength = canvasWidth / this.dimension
        this.platform = Array.from(new Array(platformLength), row => 
                        Array.from(new Array(platformLength), col => null))
    }

    showEmptyBox() {
        let {r , g , b} = this.color
        stroke(r, g, b)
        fill(backgroundColor)
    }

    placePiece(piece) {
        piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), []).forEach( box => this.platform[box.y / boxDimension][box.x / boxDimension] = box)
    }

    piecesColliding(piece, collision = (rect1, rect2) => rectCollision(rect1, rect2), applyToBoxes = box => box) {
        let boxes = piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        boxes.forEach(box => applyToBoxes(box))
        let piecesInPlatform = this.platform.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        return boxes.reduce( (z, box) => piecesInPlatform.filter( p => collision(box, p)).length > 0 ? true : z , false)
    }

    cleanFilledRows() {
        let preBoxesCount = this.countBoxes()
        this.platform.forEach( (row, i) => { if(row.every( box => box != null)) { row.forEach( (element, j) =>  this.platform[i][j] = null)} })
        let postBoxesCount = this.countBoxes()
        preBoxesCount != postBoxesCount ? points += preBoxesCount - postBoxesCount : points = points
    }

    countBoxes() {
        return this.platform.reduce( (z, row) => z += row.filter( element => element != null).length, 0)
    }
}