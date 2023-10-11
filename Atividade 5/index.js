const port = 8080;

const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
res.render("calculadora");
});

app.post('/app', (req, res) => {
    const data = {
        valor1: req.body.valUm,
        valor2: req.body.valDois,
        rslt: parseFloat(req.body.valUm) + parseFloat(req.body.valDois)
    }
    res.render('resultado', { data });
});

app.listen(port, () => {
console.log(`Servidor funcionando na porta: ${port}`);
});