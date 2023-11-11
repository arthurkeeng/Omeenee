const Products = require('../models/items.model')

const getProducts = async( req , res ) => {
   try {

   const products = await Products.find({})
   res.json({products})
}
 catch (error) {
   console.log(error)
}
}




const getSingleProduct = async( req , res ) =>{
   const { name } = req.param
   try{
   const product = await Products.find({ name })
   res.json( {product})
} 
   catch (error) {
   console.log(error)
}
}



module.exports = { 
   getProducts ,
   getSingleProduct ,

}