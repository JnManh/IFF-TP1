const express = require('express')
const app = express()
app.set("view engine","ejs")
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('home')
})
app.get("/noticias", (req, res) => {
    res.render('noticias')
})
app.get("/map", (req, res) => {
    res.render('map')
})
app.get("/sobre", (req, res) => {
    res.render('sobre')
})
app.get("/seca", (req, res) => {
    res.render('not1')
})

app.get("/moradores", (req, res) => {
    res.render('not2')
})

app.listen(8080)