


import ProductCard from '../miniComponents/ProductCard'
import '../styles/oneProduct.css'
import { mapStateToProp, } from '../testData/repeatingFunctions'
import OneProduct from './OneProduct'
import { connect } from 'react-redux'


const Product = ({allProducts , dispatch}) =>{
   // this passes the product clicked into the oneProduct component
 
   return <section className = 'product rp ma'>
      <article className='prodComp' id='prodComp' >

{/* this maps through all the products that are present in the 
category that was clicked in the see all */}
   {
      allProducts.map(product =>{
         return <ProductCard key = {product.id} 
         products = {product} 
         />

      })
   }

   
      </article>

      {/* the zIndex on this component is set to negative, thus not 
      visible, until the image is clicked and the handleClick is run */}
     <OneProduct />

   {/* <div className='loadBtns'>
       <button>
      Load Less...
    </button>
    <button>
      Load More...
    </button>
   </div> */}
     
      </section>
}



export default connect(mapStateToProp('allProducts'))(Product)
