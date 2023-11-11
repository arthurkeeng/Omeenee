
//this is used in the app component
import { connect } from "react-redux";
import {  useEffect , useState } from "react";
import Categories from "../miniComponents/categories";
import Displays from '../subComponents/Displays'
import SubCategories from "../subComponents/Categories";
import Form from "../subComponents/Form";
import OneProduct from "../subComponents/OneProduct";
import { mapStateToProp } from "../testData/repeatingFunctions";

function Home({items}){
      
   
   // this is to set the category that the product 
   // belongs to 
   const [category , setCategory ] = useState([])

   // this runs when the app initializes
   // using it to set the several categories/section

   useEffect(() =>{
      let prod = items.map( item => Object.keys(item))   
         setCategory(prod)
   },[])
 
   
      return <section className="homeSection rp ma">
         {/* sets the Display component */}
         <Displays />
         {/* displays the form component */}
         <Form />
         {/* this is the drop down menu on the nav
         component */}
         <Categories 
         />
         {/* this maps through all the various items
            and displays them accordingly 
         */}
         {
            category.map(item => <SubCategories key ={item.id}
               prod = {item} 
               />)
         }
      
      {/* this is here so it can be part of the home component
      but it has a negative z-index so it doesnt show up */}
         <OneProduct />

            </section>
   
}



// this just exports this very component

export default connect(mapStateToProp('items' ))(Home)