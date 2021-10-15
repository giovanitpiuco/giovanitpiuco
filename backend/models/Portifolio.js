const mongoose = require('mongoose');
const slug = require("slug")
//const Schema = mongoose.Schema;  módo antigo, entre chaves vc esta criando uma constante
const {Schema} = mongoose; //react, 

const portifolioSchema = new Schema({
 //descreve o quer armazenar em um schema
  //  title: String,
  //  description: String,
  //  createdAt: Date.now()

  title: {
      type: String,
      required: true,
      unique: true
  },
  slug:{
      type:String,
      required: true,
      unique: true,
      default: function() {return slug(this.title)}

  },
  description: {
      type: String,
      required: true
  },
  image: {
      type: String,
      required: true
  },
  createdAt: {
      type: Date,
      default: Date.now()
  }
});

                                //nome do model // esquema
module.exports = mongoose.model('portifolio', portifolioSchema);