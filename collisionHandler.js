let rectCollision = (firstRect, secondRect) => {
    let {r1x, r1y, r1w, r1h} = {r1x : firstRect.x, r1y : firstRect.y, r1w : firstRect.boxWidth, r1h : firstRect.boxHeight}
    let {r2x, r2y, r2w, r2h} = {r2x : secondRect.x, r2y : secondRect.y, r2w : secondRect.boxWidth, r2h : secondRect.boxHeight}

    return (r1x + r1w - collisionMargin >= r2x &&    // r1 right edge past r2 left
            r1x <= r2x + r2w - collisionMargin &&    // r1 left edge past r2 right
            r1y + r1h >= r2y &&    // r1 top edge past r2 bottom
            r1y <= r2y + r2h - collisionMargin)    // r1 bottom edge past r2 top    
}