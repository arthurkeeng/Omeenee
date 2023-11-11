
// this is used in the home component

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SEE_ALL, SEE_ONE } from '../store/actions'
import Block from '../miniComponents/Block';
import SubMenu from '../miniComponents/subMenu'
import { mapStateToProp } from '../testData/repeatingFunctions';
import { useState } from 'react';


const Categories = (props) =>{
   
   console.log(props.prod)

   //  for the swiper functionality

   let isDragStart = false , prevPageX , prevScrollLeft , products
   const dragStart = (e) =>{
      prevPageX = e.pageX || e.touches[0].pageX;
      prevScrollLeft = e.currentTarget.scrollLeft
      isDragStart = true
   }
   const dragging = (e) =>{
      
   if(!isDragStart) return;
    e.cancelable && e.preventDefault()
   let posDiff = (e.pageX || e.touches[0].pageX)- prevPageX
   e.currentTarget.scrollLeft = prevScrollLeft - posDiff
   }
   const dragStop = () =>{
   isDragStart = false
   }

   const scrollLeftRight = (e) =>{
      let scroller = e.currentTarget.parentElement.previousSibling.querySelector('.subDiv');
      // let scroller = document.querySelectorAll('.subDiv')

      let scrollerImg = scroller.querySelectorAll(' img')[0].clientWidth + 14

      if(e.target.id === 'l'){
         scroller.scrollLeft -= ( scrollerImg )
      }
      else{
         scroller.scrollLeft += ( scrollerImg )

      }
   }

   const { items ,dispatch} = props
   // this finds the items peculiar to each category
   // this returns an array from the object found 
   // this array is then mapped through in line 56

   products = items.find(item => 

      // this gets the item whose key corresponds to the same section
      // and displays the items in the section

      Object.keys(item).join() 
      == props.prod.join())[`${props.prod}`]

return <>
   <section className="subCat rp " id = {props.prod} 
   
   >
      <div className='subDiv' 
      onMouseMove={dragging}
      onMouseDown = {dragStart}
      onTouchStart = {dragStart}
      onTouchMove = {dragging}
      onMouseUp = {dragStop}
      onTouchEnd = {dragStop}
      >

      {/* this maps through each item to return a Block 
      component */}
      {
         products.map((item) =>{
            return <Block 
            dispatch = {dispatch}
            key = {item.id} {...item}
            prod = {props.prod.join()}
            />

         })

      }
      </div>
   </section>
   
   <div className='catDivs ma ta' >
      {/* <div>
         
      </div> */}
   <span className='catSection cp ab'  >

       {props.prod}</span>
      <span className='l cp ab'
      id = 'l'
      onClick={scrollLeftRight}

      > &lt;</span>
      {/* <SubMenu  category = {products}/> */}

      {/* this sets a link to the product
      component which is set in the router found
      in the app component*/}
      
      <Link to='products/allProduct' 
      className='cp seeAll'
      // connects the section to the all products components
      // so that only the sections items are displayed
      // this calls the function on the component that houses this component

      onClick = {()=>dispatch({type : SEE_ALL ,
                              payload : {
                                 section : props.prod.join()
                              }
      })}
      > See All </Link>
      <span className='r cp ab' 
      id = 'r'
      onClick={scrollLeftRight}
      > &gt;</span>
   {/* <SubMenu category = {products} section = {props.prod} /> */}
   </div>
   
   
   </>
   
}



export default connect(mapStateToProp( 'items'))(Categories)