criamos o package.json

criamos o main

baixamos o express

criamos server.js
criamos 2 rotas dentro

app. instancia 
port 
criar o banco de dados na https://cloud.mongodb.com

anotar o usuário e senha cadastrado


VARIAVEIS DE AMBIENTE
Configuração das variaveis de ambiente, é necessário instalar um pacote
### npm i dotenv

e criar o arquivo .env


MONGOOSE

### npm i mongoose


após conexão do banco de dados mongo db
faze o schema de dados


--CONCURRENTLY

### npm install concurrently --save -D                      ( modo desenvolvedor )


apos ir no packeson
adicionar no script

     "backend": "nodemon server.js",
     "frontend": "cd frontend && npm start",
     "dev": "concurrently \"npm run backend\" \"npm run frontend\" ",
     "start": "node server.js"



dependencia PROXY instalar no Front END
###  yarn add http-proxy-middleware (cmd linha de comando)

dependencia STYLED  - COMPONENTS

na pasta cd frontend
### npm i styled-components




dentro de cd /frontend
Para substituir as chamadas do comando fetch dentro do front end
### npm i --save axios 

para fazer os cache de página
### npm i --save swr