import { useState } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART } from "../store/actions";
import "../styles/oneProduct.css";
import { mapStateToProp, toggle } from "../testData/repeatingFunctions";
import SignIn from "./SignIn";

// this is the oneProduct that displays the oneProduct
// when you click on a particular item
// the product prop is destructured immediately

const OneProduct = ({ oneProduct, dispatch }) => {
  const { _id, price, img, name, description, sizes, colors } = oneProduct;
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name,
      value = e.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };


  // this closes the oneProduct component by
  // removing that class that makes it appear in the
  // first place

  return (
    <div className="oneProduct oh ma" id="oneProduct">
      <div className="oneProd1" id ="oneProd1">
        <img className="oneProdImg" id ='oneProdImg' src={img} />
        <h4 className="d j">
          <span>{name}</span>

          <span>{price}</span>
        </h4>
        <button className="oneProdBtn"
          onClick={
            // this dispatches the add to cart action

            () =>
              dispatch({
                type: ADD_TO_CART,
                //    // a payload is sent to the reducer
                payload: { id : _id , ...inputs },
              })
          }
        >
          ADD
        </button>
      </div>
      <div className="oneProd2" id="oneProd2">
        <p>{description}</p>
       {sizes && ( <> <label htmlFor="size">size</label>
        
          <select name="sizes" id="sizes" onChange={handleChange}>
            {sizes.map((size) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select></>
        )}
      {colors && ( <> <label htmlFor="colors">colors</label>

        
          <select name="colors" id="colors" onChange={handleChange}>
            {colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
          </>
        )}

        {/* 
         these buttons help to increment the quantity of the
         product you'd like to get
         */}
        <div className="btns">
          {/* this button closes the oneProduct menu */}
          <button
            className="lasBtn ab"
            onClick={() => toggle(document.getElementById("oneProduct"))}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProp("oneProduct"))(OneProduct);
