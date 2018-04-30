const express = require('express')
const app = express()
const PORT = 3001

app.listen(PORT)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})
