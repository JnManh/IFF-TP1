const express = require('express')
const app = express()
app.set("view engine","ejs")
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('home')
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

app.get('/doacao', (req, res) => {
    resultado = ""
    res.render('doacao', { resultado })
})

app.post('/result', (req, res) => {
    let nomeNoForm = req.body.nome
    let cadastro = {nome: nomeNoForm}
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro)+',');
    fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    resultado = `Olá, ${nomeNoForm}`
    res.render('result', { resultado })
});

app.listen(8080)