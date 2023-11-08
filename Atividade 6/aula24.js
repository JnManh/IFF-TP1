const express = require('express')
const app = express()
app.set("view engine","ejs")
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/obj", (req, res) => {
    res.render('objetivos')
})

app.get("/tec", (req, res) => {
    res.render('tec')
})

app.get("/ps", (req, res) => {
    res.render('portugol')
})

app.listen(8080)