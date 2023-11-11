import './styles/generalStyles.css'
import './styles/navComponent.css'
import './styles/home.css'
import './styles/subCategories.css'
import './styles/formComponent.css'
import './styles/messageComponent.css'
import './styles/navComponent.css'
import './styles/display.css'
import './styles/footer.css'
import './styles/miniCategories.css'
import './styles/cart.css'
import './styles/App.css'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter , Routes , Route } from 'react-router-dom'


import HomePage from './components/Home'
import Shared from './subComponents/Shared';
import Cart from './subComponents/Cart'
import OneCart from './subComponents/OneCart'
import Product from './subComponents/Products';
// import Container from './admin/container'
import { SET_ITEMS } from './store/actions'
import { mapStateToProp  } from "./testData/repeatingFunctions";
import app from './axiosInstance'
import WelcomePage from './subComponents/welcomePage'




const App = (props) =>{

  const { dispatch , items , ads , messages} = props
  //   useEffect( ()=>{
  //   const gettingState = (async function(){
  //     try{
  //       let { data : {products}} = await app.get('/omeenee/shops')
  //       let {data : {announcements}} = await app.get('/omeenee/announcements') 
  //       let {data : {advert}} = await app.get('/omeenee/advert')

  //      dispatch({
  //         type : SET_ITEMS,
  //         payload : { products ,
  //           advert,
  //           announcements : announcements[0].message}
          
  //       })

  //     }
  //     catch(error){
  //       console.log(error);
  //     }
  //   }())

  // } ,[] )
  return <>


{ (items.length > 0 ,ads.length > 0 , messages.length > 0) ?  
<> <BrowserRouter >
  <Routes >
    <Route path = '/' element = {<Shared/>}
    >
      <Route index element = {<HomePage />} />
      <Route path = 'cart' element = {<Cart  />} />
      <Route path = 'cart/:cartID' element = {<OneCart  />} />
      <Route path='products/allProduct' element = {<Product 
   
      />} />
      

    </Route>
  </Routes>

</BrowserRouter> 
 {/* <Container />  */}
 </>
 : <WelcomePage/> 

}


  </>



}


export default connect(mapStateToProp('items' ,'ads' , 'messages' ))(App)

