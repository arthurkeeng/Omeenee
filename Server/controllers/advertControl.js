

const Advert = require('../models/advert.model')





const getAdvert = async( req , res ) =>{
   try {
      
      const advert = await Advert.find({})
      res.json( {advert} )
      
   } catch (error) {
      res.json(error)
   }
}


module.exports = {  getAdvert }