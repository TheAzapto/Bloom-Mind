const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.status(200).json({ message: "Connected" })
})

app.listen(port, () => {
    console.log(`app listinging on port http://localhost:${port}`)
})