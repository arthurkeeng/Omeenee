
// this component is the shared component that would be shared among 
// the components in the route
import { Component } from "react";
import messages  from "../testData/message";
import Navbar from "./Navbar";


import {Outlet} from 'react-router-dom'
import Message from "./Message";
import Footer from "../components/Footer";


class Shared extends Component{
   render(){
      return <div>
         <Message messages = {messages}/>
         <Navbar /> 
         <Outlet/>
         <Footer />

      </div>
   }
}

export default Shared