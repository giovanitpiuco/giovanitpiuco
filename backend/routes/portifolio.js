const router = require('express').Router()
//const { deleteOne } = require('../models/Portifolio')
const Portifolio = require('../models/Portifolio')

//letra maiucula para dizer qque é a identidade reforçando que é isso
//listar todos
router.get('/', async (req, res) => {
    try{
        const portifolio = await Portifolio.find()
    
        res.json({
            success: true,
           data : portifolio
        })
    }catch(err){
        res.json({
            success: false,
           message : err
        })
    }
})

router.get('/:slug', async (req, res) => {
    try {
        const portifolio = await Portifolio.findOne({
            slug: req.params.slug
        })
        res.json({
            succes: true,
            data: portifolio
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })    
    }
    
})
//UPDATE

router.patch('/:slug', async (req, res) => {
    try {
        const updatePortifolio = await Portifolio.updateOne({
            slug:req.params.slug
        }, 
        {   title: req.body.title,
            description: req.body.description,
            image: req.body.title
        })
         res.json({
            success: true,
          //  data: updatePortifolio
          updated: updatePortifolio.nModified
        })
    } catch (err) {
        res.json({
            success: false,
            message:err
        })
    }
})


//CREATE 012 Criando seu próprio portfolio do zero com Javascript (MERN) - Salvando Post no MongoDB 
router.post('/', async (req, res) => {
    //gravar no banco de dados
    const portifolio = new Portifolio({
          title: req.body.title
        , description: req.body.description
        , image: req.body.image

    });
   try {
       const savedPortifolio = await portifolio.save()
       res.json({
            success: true,
            data: savedPortifolio
        })
       
   } catch (error) {
       res.json({
           success: false,
           message:error
       })
   }
})
router.delete("/:slug", async( req, res) => {
    try{                               //Maiuculo
        const deletedPortifolio = await Portifolio.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            deleted: deletedPortifolio.deletedCount
        })
    }catch (err){
        res.json({
            success: false,
            message: "não deletado " + err
        })
    }
    
})
module.exports = router