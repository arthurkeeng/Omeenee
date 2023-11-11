
const mongoose = require( 'mongoose')
require('dotenv').config()


const connection = (url) =>{
   return mongoose.connect(url , console.log('database connected successfully'))
}

module.exports = connection



