
const FooterOne = () => {
   return <main className ='footerMain' style={style.one}>
      <div>
         <h1 className="navH3">
            <span>
            OmeeNee - &nbsp;
         </span>
         <span>
            SToRes
         </span>
            </h1>
      </div>
      <div style={style.two}>
         <input style={style.three} placeholder="enter your suggestions/feedback"/>
         <button style={style.four}>submit</button>
      </div>
      <div style={style.five}>
         <h2>
             Our app Soon on
         </h2>
         <h2> 
            <span>Apple Store  and </span>
            <span>Google store</span>
            </h2>
      </div>
   </main>
}


const style = {
   one :{
      padding : ' 2rem 0 8rem 0',
      borderBottom : `1px solid rgba(
         50 , 205 , 50 , 0.5
      )`,
      display : 'flex',
   justifyContent : 'space-between ',
   alignItems : 'center',
   },
   two : {
      flexBasis : '60%',
      textAlign : 'center',

   },
   three : {
      padding : '1.3rem',
      borderRadius : '8px ',
      border : 'none',
      outline : 'none',
      width : '40%',
   },
   four : {
      borderRadius: '8px',
      padding: '1.3rem',
      border: 'none',
      marginLeft: '1rem'
   },
   five : {
   width : '26%',
   textAlign : 'center'
   }
   
}
export default FooterOne