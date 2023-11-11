import { merged } from "../testData/repeatingFunctions";
import {
  SET_ITEMS,
  SEE_ALL,
  SEE_ONE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CALC_TOTAL,
  INCREASE_QUANT,
  DECREASE_QUANT,
  SET_USER, 
  LOG_USER,
  LOG_OUT,
  SET_MESSAGE, 
  SET_ORDERS,
  CLEAR_CART, 
} from "./actions";

export const reducer = (state = [], action) => {

  // this is used to set the orders
  if(action.type === SET_ORDERS){
    const orders = action.payload.orders
    return { ...state , orders }
  }

  // all the important app states are set
  
  if( action.type === SET_ITEMS ){
    const rawItems = action.payload.products,
     messages = action.payload.announcements,
     ads = action.payload.advert
    let items = merged(rawItems)
    
    return {...state , ads , rawItems , items , messages}
  }
  // this `items` property would probably be used in multiple places
  // hence it is destructured at the top
  const { items , rawItems } = state;

  // this helps to select all the products in a section
  // after the see all is clicked
  if (action.type === SEE_ALL) {
    // this is gotten from the payload in the action object
    let section = action.payload.section;

    //  this finds the items in the section and sets it to the
    // variable allProducts
    let allProducts = items.find((item) => Object.keys(item) == section)[
      `${section}`
    ];
    let products = allProducts.map(item => {
    item.section = section
    return item
  })
     // this sets the allProducts property to the currently clicked section
    // items
        return { ...state, allProducts: [...products]  };
  }


  // this helps to display one item clicked
  if (action.type === SEE_ONE) {
    let prods
    if(action.payload.name){
      let name = action.payload.name
      prods = rawItems.find((item , i )=> item.name == name
        )
      if(!prods) alert( 'no such item exists')
      
    }

    else{
      // the id and the section are gotten from the payload
      // of the action

      let id = action.payload.id;
      let section = action.payload.section;
      // all the steps below leading up to the return statement help to get
      // that one item
      let prod = items.find((item) => Object.keys(item).join() == section);
      let pro = prod[`${section}`];
      prods = pro.find((item) => item._id == id);
  
      // sets the one product to the product item clicked on
      // and adds the quantity property and sets it to 1
    }
    return { ...state, oneProduct: { ...prods, quantity: 1 ,
      total : prods.price     } };
  }


  //this is to add item to cart
  if (action.type === ADD_TO_CART) {

    let itemExists = state.cart.some((item) => item._id === action.payload.id);
    if (itemExists) {
      return { ...state };
    }
    state.oneProduct.size = action.payload.sizes
    state.oneProduct.color = action.payload.colors
    // this in a nutshell pushes items to the cart array
    return { ...state, cart: [...state.cart, state.oneProduct] };
  }


  // this is to remove an item from the cart
  if (action.type === REMOVE_FROM_CART) {
    let id = action.payload.id;

    let filtered = state.cart.filter((item) => item._id !== id);
    return { ...state, cart: filtered };
  }


  // calculates total
  if (action.type === CALC_TOTAL) {
    let total = state.cart.reduce((prev, next ) => {

      return prev + next.total;
    }, 0);
    return { ...state, cartTotal: total   };
  }


  // to increase quantity of item
  if (action.type === INCREASE_QUANT) {
    let id = action.payload.id;

    // console.log(price);
    let newCart = state.cart.map((item) => {
      if (item._id === id) {
        item = {...item , quantity : ++item.quantity, 
          total : item.quantity * item.price
      };
        
      }
      return item;
    });
  


    return { ...state, cart: newCart };
  }


  // to increase quantity of item
  if (action.type === DECREASE_QUANT) {
    let id = action.payload.id;
    let newCart = state.cart.map((item) => {
      if (item._id === id) {
         if(item.quantity > 1 ){

            item = {...item , quantity : --item.quantity , 
            total : item.total - item.price
            }
         }
      }
      return item;
    });
    return { ...state, cart: newCart };
  }

  // this is to set the user
  if(action.type === SET_USER){
    let user = action.payload.user 
    return {...state , user , users : [...state.users , user]}
  }

  // this logs the person in 
  if(action.type === LOG_USER){
    let userInput = action.payload.user
    let user = state.users.find(user =>{
    return (user.email === userInput.email && user.password === userInput.password)
  })
      return { ...state , user} 

  }
  // logging out the user . it sets the user property in the 
  // state to an empty object
  if(action.type ===LOG_OUT){
    let user = ''
    console.log('working');
     return {...state , user}

  }

  if (action.type === SET_MESSAGE) {
    const messages = action.payload.message
    return { ...state , messages}
  
  }

  // this is used to clear cart
  if(action.type === CLEAR_CART){
    return { ...state , cart : []}
  }
  return state;
};
