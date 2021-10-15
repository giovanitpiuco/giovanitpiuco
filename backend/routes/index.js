const router = require('express').Router();
const mongoose = require('mongoose');

require ('../db/mongoConnection');

const portifolio = require('./portifolio')

router.get('/', (req, res) => {
    //vai ter acesso ao mongo db, apartir ddaqui !!1
    res.json({
        success: false,
        message: "Please, do not call /api, it is for our server"
    })
})

router.use('/portifolio', portifolio)

module.exports = router