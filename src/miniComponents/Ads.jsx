
// this is used in the displays component found 
// in the subcomponents

import { useState , useEffect} from "react"
import { style } from "../testData/object"
import { connect } from "react-redux"
import { setInt , mapStateToProp } from "../testData/repeatingFunctions"

const Ads = ({ads, sn , t1 , t2}) =>{
    const [count , setCount] = useState(0)

   //  this useEffect is run at every rerender. this spins up 
   // the ad rotation 
   
    useEffect(()=>{
      // this would rotate the ads on the list 
      
      // setInt( ads.length , setListCount , t1)
    

      // this causes the ads in the ad section to change every 10sec
      setInt(3 , setCount , t2)
      
    },[])

   return <div className="ads ad"  style={style.ads}>
      <img src = {ads[sn].img} style = {style.image}/>
      
      <div className="adInfo" style={style.info}> 
      <h2> {ads[sn].message[count]}</h2>
      <h2>
         <a href = {ads[sn].link} > for more info ... </a>
         </h2>
      </div>

   </div>
}
// const mapStateToProps = state =>{
//    return { ads : state.ads }
// }
export default connect(mapStateToProp( 'ads'))(Ads)

