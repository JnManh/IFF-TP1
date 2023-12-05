const express = require('express')
const app = express()
const fs = require('fs')
app.set("view engine","ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

let vetorNomes = []

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
    resultado=''
    res.render('doacao')
})

app.post('/pedirDadosdoUsuario', (req, res) => {
    let nomeNoForm = req.body.nome
    let valorNoForm = req.body.valor
    let cadastro = `Obrigado ${nomeNoForm} por doar R$${valorNoForm}!`
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro)+',');
    vetorNomes.push(cadastro)
    fs.writeFileSync('usuario.json', JSON.stringify(vetorNomes))
    res.redirect('/mostrar')
})

app.get('/mostrar', (req, res) => {
    content = JSON.parse(fs.readFileSync('usuario.json','utf8'))
    res.render('result', { vetorNomes: content })
})

app.listen(8080)