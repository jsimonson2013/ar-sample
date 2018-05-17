const express = require('express')
const app = express()
const PORT = 3001

app.listen(PORT)

app.use('/models', express.static(__dirname + '/models'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})
