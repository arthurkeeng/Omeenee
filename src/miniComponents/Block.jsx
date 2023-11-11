import { SEE_ONE } from "../store/actions";
import {  handleChange, toggle } from "../testData/repeatingFunctions";

const Block = (props) => {

   // destructures the dispatch property present on the props
  const { dispatch } = props;
  const handleClick = e => {
    dispatch({
      type: SEE_ONE,
      payload: {
        id: props._id,
        section: props.prod,
        
      },
    });

    // there is an openproduct function on the parent component
    // that function is run from this component
    toggle(document.getElementById('oneProduct'))    
  
  }
  return (
    <>

        <img draggable ={false}
          src={props.img}

          // spreads all the properties on the props object
          {...props}

          // the onclick event dispatches a see one action and opens the single
          // product that was clicked on
          onClick={ handleClick}
        />
    </>
  );
};

export default Block;
