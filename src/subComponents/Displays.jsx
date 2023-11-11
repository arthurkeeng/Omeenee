

// this is used in the home component


import Ads from "../miniComponents/Ads"


// this sets the style here cos the component
// is fairly small hence the styling is done here
const style = {
   flexBasis : '39%',
   display :'flex',
   flexDirection : 'column'
}

// this component is responsible for the ads that displays at the top of 
// the site
const Displays = () =>{
   return <section className="disSection">
      <div className= " rowDis" style={style}>
         <Ads sn = {0} t1 ={ 50000 } t2 = { 10000 }/>
         <Ads sn = {1} t1 ={ 60000 } t2 = { 15000 }/>
         </div>

      <Ads sn = {2} t1 ={ 70000 } t2 = { 20000 }/>
   </section>
}

export default Displays