

// this is used in the form component
import { useState } from "react";
import { connect } from "react-redux";
import { LOG_USER, SET_USER } from "../store/actions";
import { mapStateToProp, toggle } from "../testData/repeatingFunctions";

const SignIn = ({dispatch ,changeSigns , users}) => {
      const [check , setCheck ] = useState(false)
      const [ fields , setFields ] = useState({})

  const checkField = (e) => {
      let msg , target = e.target.name , input = e.target , 
      form = e.currentTarget;
      switch(target){
         case ('username'):
             msg = ((input.value == '' || input.value.length < 5) && 
                           'username cant be empty or less than 5')
            break;
         case ('email'):
            msg = ((input.value == '' || input.value.length < 12 )) && 
                        'enter a valid email address'
            break;
         case ('password'):
            msg = (input.value == '' || input.value.length < 6) &&  
                           `username can't be empty or less than 5`
            break;
         case ('enter'):
            msg = (input.value !== input.previousSibling.value) &&  
                           `passwords don't match`
            break;
         default:
             msg = ''
             console.log('working')
            break;
      
         }


       setFields({...fields , [target] : input.value})
  
         
   }


   // this uses the check box to make the password visible or hidden 
  function checked(e){
      let form = document.forms[0]
      setCheck(!check)
      console.log(form.password);
      check ? (form['password'].type = 'text', form['enter'].type = 'text' ) : 
      (form['password'].type = 'password' , form['enter'].type = 'password')
   }

  function submit(e){
   e.preventDefault()
   dispatch({
      type : SET_USER, 
      payload : {
         user : fields
      }
   })
   dispatch({
      type : LOG_USER,
      payload : {
         user : fields
      }
   })
   toggle('form')
}

      return <section className= 'sign-up' >
        <form className="startUp" 
        onChange = {checkField} onSubmit={submit}>
        <div className="form-div">

        <label className="label">
               Username 
            </label >
            <input 
            name = 'username'
            className = 'input' autoComplete="true" placeholder="enter username choice"/>

         <label className="label">
               Email address
            </label>
            <input name = 'email' className = 'input' autoComplete="true" placeholder="enter email address" />

            <label className="label">
               Password  
            </label>
            <input name = 'password' className="input"  autoComplete="true" type = 'password' placeholder="enter password" />
            <label className="label">
               Re-enter password 
            </label>
            <input name = 'enter' className="input" 
            type = 'password' autoComplete="true" placeholder="enter password again" />
            <input name = 'check' 
            onClick = { checked} defaultChecked = {check}
            className = 'input' type = 'checkbox'  id="check" />

            <input className= 'input' type="submit" id="submit" value="signUp" />
            <p> Already have an account   <a className="signIn cp"
            onClick={()=>changeSigns()}
            >
               Log in
            </a></p>
        </div>

        </form>

        
         </section>
         
   }


export default connect(mapStateToProp('users'))(SignIn)