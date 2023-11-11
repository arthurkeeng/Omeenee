


// this is used in the home component
import { useState , useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProp } from "../testData/repeatingFunctions";
import CartItem from "./CatItem"

// this is the container for the category list found on the navbar(categories link)
const Categories = ({ items }) => {
   // this sets the category list for the dropdown menu
   const [category , setCategory ] = useState([])
  
   // sets the category array to be dynamically used on the component
   // this is in turn put on the cartItem as prop 

   useEffect(()=>{
      // this maps throught the item list to get 
      // the object keys
     let   list = items.map(item => 
         Object.keys(item).join()
         )
      // from the useState, it updates the category
      setCategory(list)
   },[])


      return <div className="hCategories " id = 'categ'>
         {/* this maps through the various category list
         and then sets it in the cartItem component */}
      {
         category.map(item => {
            
         return <CartItem key={item} name = {item}
            item = {item}
         />}
)
         
         }


   </div>
   }
   


export default connect(mapStateToProp('items'))(Categories)