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
        this.platform.forEach( (row, i) => row.forEach( (box, j) => box === null ? this.showEmptyBox(i, j) : box.show()))
    }

    generatePlatform() {
        let platformLength = canvasWidth / this.dimension
        this.platform = Array.from(new Array(platformLength), row => 
                        Array.from(new Array(platformLength), col => null))
    }

    showEmptyBox(row, col) {
        let {r , g , b} = this.color
        stroke(r, g, b)
        fill(backgroundColor)
        rect(row * this.dimension, col * this.dimension, this.dimension, this.dimension)
    }

    placePiece(piece) {
        piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), []).forEach( box => this.platform[box.x / boxDimension][box.y / boxDimension] = box)
    }

    piecesColliding(piece, fun = (rect1, rect2) => rectCollision(rect1, rect2)) {
        let boxes = piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        let piecesInPlatform = this.platform.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        return boxes.reduce( (z, box) => piecesInPlatform.filter( p => fun(box, p)).length > 0 ? true : z , false)
    }

    piecesCouldCollide(piece, fun = box => box) {
        let boxes = piece.shape.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        boxes.forEach(box => fun(box))
        let piecesInPlatform = this.platform.reduce( (z, x) => z.concat(x.filter(col => col != null)), [])
        return boxes.reduce( (z, box) => piecesInPlatform.filter( p => rectCollision(box, p)).length > 0 ? true : z , false)
    }
}