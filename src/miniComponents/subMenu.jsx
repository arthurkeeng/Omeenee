

import { connect } from 'react-redux'
import { mapStateToProp } from '../testData/repeatingFunctions';
const SubMenu = (props) =>{
   const { dispatch , category , section } = props
   let lists = []
   let categor = category.map(cat=>{
      if(lists.indexOf(cat.category) !== -1){
         return lists
      }
      else{
         if (cat.category !== undefined )lists = [...lists , cat.category] 
         return ;
      }
   })

   // const handleClick = e =>{
   //    dispatch({
   //       type : SIEVE,
   //       payload : {
   //          section : e.currentTarget.id,
   //          id : e.target.id
   //       } 
   //    })

   // }
return <div 
// id= { section }
// onClick = { handleClick}

style={style.div}>
      { lists.map(list=>{
         return <p style={style.p} id = { list }
         >
            {list}
         </p>
      })}
      <p style={style.p}> All product</p>
   </div>
}

export default connect(mapStateToProp( 'cartTotal'))(SubMenu)
const style = {
   div : {
   background: 'rgba(197 197 144 / 90%)',
    padding: '4px 17px',
    position: 'absolute',
    top: '-17rem',
    left: '-53rem',
    width: 'fit-content',
    maxHeight : '16rem',
    height : 'fit-content',
    display: 'grid',
    gridTemplateColumns: 'repeat(3 , 0.8fr',
    alignItems: 'flex-start',
    gap : '1rem',
   //  zIndex : '-1',
    overflow : 'hidden',
    opacity : '1'

   },
   p : {
      width: 'fit-content',
      cursor : 'pointer',
      color : 'blue',
      paddingBottom : '4px',
      fontSize : '1.4rem'
   }

}