const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes/')

const app = express();

app.use(bodyParser.json())

app.use('/api', api)

//somente para produção
if (process.env.NODE_ENV === 'production'){
    //expresss entrega os access de produção (aula38)
    //como por exemplo main.js ou main.css

    app.use(express.static('frontend/build'));

 //o express vai entregar arquivo index.html se não reconhecer a rota
        //se não for nada no /api
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })

}

const PORT = process.env.PORT;
app.listen(PORT, function(){
    console.log (`servidor rodando na porta http://locahost:${PORT}`)
})

console.log("nome do banco de dados do MONGODB:", process.env.MONGO_DB);
console.log("nome do banco de usuário do MONGODB:", process.env.MONGO_USER);
console.log("nome do banco de senha do MONGODB:", process.env.MONGO_PASSWORD);
console.log("VARIAVEL DE AMBIENTE PORTA", process.env.PORT);