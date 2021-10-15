const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }, 
 () => {
    console.log("MONGODB conexão na nuvem conectado...")
})


