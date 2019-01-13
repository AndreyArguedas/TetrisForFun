const express      = require('express')
const path         = require('path')
const http         = require('http')

const port         = process.env.PORT || 9090;
const app          = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
} )

app.set('port', port)
const server = http.createServer(app)

server.listen(port, () => console.log(`*** Server is up and running on port ${port} ***`))