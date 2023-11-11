import { connect } from "react-redux";
import { SEE_ONE } from "../store/actions" 
import { mapStateToProp, toggle } from "../testData/repeatingFunctions";


// this component is for the all products
const ProductCard = (props) =>{
   // this is to destructure the object properties.
   const {products : { _id , img, name , price , id , section ,}, dispatch} = props

return <article className='prodArt oh ta' >
      <div>
         <img src= {img} 
         // this sets an onclick event that triggers a function in the product component
         // this dispatches the see one action and is passed a payload
         // since this action requires
         
         onClick={() => {
            dispatch({ type : SEE_ONE , 
            payload : { id : _id , section}}) 
            toggle(document.getElementById('oneProduct'))
         }

         }
         
         />
      </div>
      <h2 className=" d j "> 
         <span>
            {name}
         </span>
         <span>
            {price}
         </span>
      </h2>
       </article>
}

export default connect(mapStateToProp('ads'))(ProductCard)