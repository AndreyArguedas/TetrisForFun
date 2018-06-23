class Box {
    constructor(x = 0, y = 0, boxWidth = 60, boxHeight = 60, color = {r : 0, g : 0, b : 0}){
        this.x = x
        this.y = y
        this.boxWidth = boxWidth
        this.boxHeight = boxHeight
        this.color = color
    }

    show(){
        let actualColor = this.color
        fill(actualColor.r, actualColor.g, actualColor.b)
        rect(this.x, this.y, this.boxWidth, this.boxHeight)
    }
}