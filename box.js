class Box {
    constructor(x = 0, y = 0, width = 60, height = 60){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    show(){
        rect(this.x, this.y, this.width, this.height)
    }
}