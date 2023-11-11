

const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
   // id : String,
   section : {
      type : String , 
      required : true}, 
   name : {
      type : String,
      required : true , 
      unique : true
   },
   img : String,
   description : String,
   price : Number,
   category : String,
   vN : String,
   vC : Number,
   vendorMail : String,
   colors : Array,
   sizes : Array,
})

module.exports = mongoose.model('products' , ProductsSchema)