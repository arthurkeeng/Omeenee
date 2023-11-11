

import { useParams } from "react-router-dom";
import messages from "../testData/message";

const OneCart = () =>{
   let cartID = useParams
   let message = messages.find(message => message.id === CartID)
   return <div>

   </div>
}

export default OneCart   
