const express = require('express')
const app = express()
const fs = require('fs')
app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('home')
})

app.get("/seca", (req, res) => {
    res.render('not1')
})

app.get("/moradores", (req, res) => {
    res.render('not2')
})

app.get('/doacao', (req, res) => {
    resultado = ""
    res.render('doacao', { resultado })
})


app.post('/pedirDadosdoUsuario', (req, res) => {
    let resultado = req.body.valor1 ?? req.body.valor2 ?? req.body.valor3 ?? req.body.valorEscolhido
    res.render('result', { resultado })
});

app.post('/salvar', (req, res) => {
    dados = {
        valor: resultado,
        nome: req.body.nome,
        Email: req.body.email,
    }
    fs.appendFileSync('usuario.json', `\n${JSON.stringify(dados)}`)
    resultado = `Olá, ${dados}`
    res.render('result', { resultado })
})
app.listen(8080)