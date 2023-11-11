// this is used in the app.js
//  this is for the cart component

import {
  CALC_TOTAL,
  DECREASE_QUANT,
  INCREASE_QUANT,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../store/actions";
import { connect } from "react-redux";
import { useEffect , useState} from "react";
import { Link } from "react-router-dom";
import app from '../axiosInstance'
import { mapStateToProp } from "../testData/repeatingFunctions";

// the cart prop is gotten from the mapStateToProps function

const Cart = ({ cart, dispatch, cartTotal : total }) => {

  const [ inputs , setInputs ] = useState({})

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value

    // this sets the inputs ie. the address and the customer's phone number
    setInputs({ ...inputs , [name] : value })
  }

  const makeOrder = async() =>{

    // this is what makes the post request for the order
  try {

    // axios has this thing where it sends an response object with the data key
    //  hence we destructure the data property

      const { data } = await app.post('omeenee/orders',{ items : cart , 
      ...inputs , total 
    })
    alert(data.msg) 
    dispatch({
      type : CLEAR_CART
    })
      
    } catch (error) {
      console.log(error);
  }
}
   useEffect(()=>{                        
      dispatch({ type: CALC_TOTAL });
})
  return (
    <section id='cartSection'className="cartSection rp">
      <h1>Your Cart Items</h1>
      <div>
        {
          // if no item exists in the cart
          !cart.length ? (
            <h3 className="empty">
              There are no items on your cart yet.. select items to put in cart
              and you are on your merry way
            </h3>
          ) : (
            //  if items exist in the cart
            cart.map((cart) => {
              // destructured from the cart prop above
              let { _id, name, price, quantity, img } = cart;

              return (
                <div key={cart.id} className="cartSectionDiv d ">
                  <img src={img} alt="an image" className="cartImg" />
                  <div>
                    <h1>{name}</h1>
                    <h1>{price}</h1>
                    <h2
                      className="cartRemove"
                      onClick={() => {
                        dispatch({
                          type: REMOVE_FROM_CART,
                          payload: { id : _id },
                        });
                      }}
                    >
                      remove
                    </h2>
                  </div>
                  {/* the div below helps to increment the quantity */}
                  <div className="cartControl">
                    <h1
                      onClick={() => {
                        dispatch({
                          type: INCREASE_QUANT,
                          payload: { id : _id , price},
                        });
                       
                     }}
                    >
                      +
                    </h1>
                    <h2> {quantity} </h2>
                    <h1
                      onClick={() => {
                        dispatch({
                          type: DECREASE_QUANT,
                          payload: { id : _id, price },
                        });
                       
                      }}
                    >
                      -
                    </h1>
                  </div>
                 
                </div>
              );
            })
          )
        }
        {!cart.length ? (
          ""
        ) : (
          <>
            {/* this gives the total of all the items in the cart */}

            <div className="total">
              <h2>Total :</h2>
              <h2> {total}</h2>
            </div>
            <div className="smb cartDetails">
                    <p className="fs smb">
                      Enter the details below.
                      Where you'd like item delivered 
                      and contact details
                    </p>
                    
                    <select required = {true}
                    name = 'address' title="enter delivery address"
                    className="p" onChange={handleChange}>
                    <option disabled = {true} selected = {true}>Enter delivery address</option>
                      <option value="ajah">Ajah</option>
                      <option value="lekki"> Lekki</option>
                      <option value="marwa">Marwa</option>
                      <option value="epe">Epe</option>
                      <option value="ikate">Ikate</option>                  
                    </select>
                    <input className = 'ab sml p' required
                    name = 'phone'
                    onChange={handleChange} 
                    type="number" placeholder="enter phonenumber" />
                  </div>

            {/* buttons for the various payment means */}

            <div className="payButtons bmt">
              <h1>
                Send order :
                {/* <button> Crypto</button> */}
                <button disabled = {(inputs.address && inputs.phone)? false : true}
                onClick={makeOrder}> Send</button>
              </h1>
            <Link to="/" className="backHome"> back home</Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};


export default connect(mapStateToProp('cart' , 'cartTotal'))(Cart);
