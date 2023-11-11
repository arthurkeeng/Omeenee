

// this is used in the shared component

// the connect is used to connect component to the redux store
import { connect } from 'react-redux'
import {mapStateToProp} from '../testData/repeatingFunctions'


const Message = ({messages = []}) => {
   return <div className="messageDiv">
      { !messages.length ? 
         <h4> welcome to omeenee stores</h4>

         : messages.map((message , i ) => {
            return < h4 key = {i}> {message}</h4>
             
         })
      }
   </div>
}



export default connect(mapStateToProp( 'messages'))(Message)
// this is used in the shared component