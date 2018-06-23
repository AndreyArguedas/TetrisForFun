const canvasWidth = 600
const canvasHeight = 600
const backgroundColor = 50
const boxDimension = 30
const timeInterval = 500

let piece_O = [ [1, 1], 
                [1, 1] 
              ]

let piece_I = [ [0, 1, 0, 0], 
                [0, 1, 0, 0],
                [0, 1, 0, 0], 
                [0, 1, 0, 0]
              ]

let piece_S = [ [0, 0, 0], 
                [0, 1, 1],
                [1, 1, 0]
              ]

let piece_Z = [ [0, 0, 0], 
                [1, 1, 0],
                [0, 1, 1]
              ]

let piece_L = [ [1, 0, 0], 
                [1, 0, 0],
                [1, 1, 0]
              ]

let piece_J = [ [0, 0, 1], 
                [0, 0, 1],
                [0, 1, 1]
              ]

let piece_T = [ [0, 0, 0], 
                [1, 1, 1],
                [0, 1, 0]
              ]


/* Colors */

const purpleColor = {r : 175, g : 100, b : 220}