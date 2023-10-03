const port = 8080;

const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
res.render("form");
});

app.post('/app', (req, res) => {
    const data = {
        nome: req.body.name,
        sobrenome: req.body.sobrenome
    }
    res.render('cadastro', { data });
});

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});