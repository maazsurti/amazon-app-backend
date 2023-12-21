const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`)
})

//http://<myip>/init
app.get("/init", (req, res) => {
    res.json({ "key": "value" })
})