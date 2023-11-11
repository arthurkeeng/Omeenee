
const mongoose = require('mongoose')

// structure of the items array
// {
   //  name , section , price , quantity , total ,image
// }
const orderSchema = mongoose.Schema({
   items : Array,
   address : {
      type : String,
      required : true 
   },
   phone : {
      type : Number,
      required : true
      },
   paid : {
      type : Boolean,
      default : false
      },
   total : Number,
   handled : {
      type : Boolean,
      default : false
   },
   delivered : {
      type : Boolean,
      default : false
   },



})


module.exports = mongoose.model("Order" , orderSchema)