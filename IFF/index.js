const express = require('express')
const app = express()
app.set("view engine","ejs")
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('home')
})

app.get("/doacao", (req, res) => {
    res.render('doacao')
})

app.get("/contato", (req, res) => {
    res.render('contato')
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

app.post('/test', (req, res) => {
    const data = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        valor: req.body.valor
    }
    res.render('form', { data });
});



app.listen(8080)