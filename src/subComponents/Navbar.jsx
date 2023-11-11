

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CALC_TOTAL ,LOG_OUT, SEE_ONE} from "../store/actions";
import { mapStateToProp } from "../testData/repeatingFunctions";
import { toggle } from "../testData/repeatingFunctions";
import app from '../axiosInstance'
import { useEffect , useState } from "react";


const Navbar = ({ cart, dispatch, user }) => {
  const [ name , setName ] = useState('')
  useEffect(()=>{
    dispatch( { type : LOG_OUT} )
  },[])

  const handleChange = (e) =>{
    let target = e.target.value
    setName(target)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch({
      type : SEE_ONE,
      payload : { name }
    })
    toggle(document.getElementById('oneProduct'))    

  }

  const handleClick = async(e) => {
    // gets the form with this particular id
    let form = document.getElementById("form"),
      // gets the element with the category pane to toggle it

      cat = document.getElementById("categ"),
      // gets the event object where the event occured
      target = e.target;
    // conditionally toggles the form or the category list
    target.id === "acct"
      ? toggle(form)
      : toggle(cat)
     
  
  };
  return (
    <>
      <nav className="d nav">
        <h3 className="navH3">
          <Link to="/">
            <span>Omee - &nbsp;</span>
            <span>Nee</span>
          </Link>
        </h3>
        <h3
          className="navSpan"
          // sets the onclick event
          onClick={handleClick}
        >
          <span>Categories</span>
          <span>^</span>
        </h3>
        <div className="navForm">
          <form className="navFm" aria-disabled ={true}
          onChange={handleChange}
          onSubmit = {handleSubmit}
          >
            <input placeholder="search item" />
          </form>
        </div>

        <div className="navLink rp d j">
         {
            !user ? <Link
              to=""
              id="acct"
              className="smr"
              // sets the onclick event handler
              onClick={handleClick}
            >
              Account
            </Link>
            :
            <>
              <h2>{user.username}</h2><h2
            onClick={() =>{
               dispatch( { type : LOG_OUT})
                       }}
          >Log Out</h2>
            </>
         }            
            

          <Link className="navCart"
            to="/cart"
            onClick={() =>
              dispatch({
                type: CALC_TOTAL,
              })
            }
          >
            Cart <span className="numItems">{cart.length}</span>
          </Link>
          <h4>
        
          </h4>
        </div>
      </nav>
    </>
  );
};

export default connect(mapStateToProp("cart", "user"))(Navbar);
