
const mongoose = require('mongoose')
const AdvertSchema = new mongoose.Schema({
   // this would eventually be an array of adverts
   name : {
      
      type :String,
      unique : true
      },
   // there would be three messages, hence, we would have for names
   // messageOne, ..Two and ...Three to update 
   message : Array,
   img : String, 
   link : String,

})

module.exports = mongoose.model( 'advert' , AdvertSchema)