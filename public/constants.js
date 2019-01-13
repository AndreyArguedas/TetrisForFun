const canvasWidth = 600
const canvasHeight = 600
const backgroundColor = 50
const boxDimension = 30
const timeInterval = 500
const collisionMargin = 1
const marginPieceBeginning = 2
const startingPoints = 0
const begginingPoint = 0

const piece_O = [ [1, 1], 
                [1, 1] 
              ]

const piece_I = [ [0, 1, 0, 0], 
                [0, 1, 0, 0],
                [0, 1, 0, 0], 
                [0, 1, 0, 0]
              ]

const piece_S = [ [0, 0, 0], 
                [0, 1, 1],
                [1, 1, 0]
              ]

const piece_Z = [ [0, 0, 0], 
                [1, 1, 0],
                [0, 1, 1]
              ]

const piece_L = [ [1, 0, 0], 
                [1, 0, 0],
                [1, 1, 0]
              ]

const piece_J = [ [0, 0, 1], 
                [0, 0, 1],
                [0, 1, 1]
              ]

const piece_T = [ [0, 0, 0], 
                [1, 1, 1],
                [0, 1, 0]
              ]

const pieces = [piece_O, piece_I, piece_S, piece_Z, piece_L, piece_J, piece_T]


/* Colors */

const purpleColor = {r : 175, g : 100, b : 220}
const pinkColor   = {r : 240, g : 150, b : 150}
const yellowColor = {r : 255, g : 204, b : 0}
const blueColor   = {r : 0,   g : 0,   b: 255}
const darkColor   = {r : 50,  g : 55,  b : 100}

const colors = [purpleColor, pinkColor, yellowColor, blueColor, darkColor]