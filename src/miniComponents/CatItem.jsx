

// this is used in the categories component

import { connect } from "react-redux";
import { mapStateToProp } from "../testData/repeatingFunctions";



// since this is a fairly small component , there's no need having a 
// different css file for it , hence , the syling is done here

const style1 = {
   justifyContent : 'space-between',
   fontSize : '1.4rem',
   marginTop : '6px',
   margin : '8px 7px',
   padding : '8px',
   borderBottom : ' 1px solid lightgrey'
}

// this is the component for the drop down menu on the navbar

const CartItem = ({ name , items}) =>{
   const filtered = items.find(item => Object.keys(item) == name)
   const length = filtered[name].length
   return <div className="d "
   style={style1}
   >
      {/* helps to display the various 
      categories present in the data */}
      <h4>< a href ={ `#${name}`} >
         {name}
         </a>
      </h4>
      <h4> {length} items</h4>
   </div>
}





export default connect(mapStateToProp( 'items'))(CartItem)