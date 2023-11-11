

// this is used in the form component

import {  useState } from "react"
import { connect } from "react-redux";
import { LOG_USER } from "../store/actions";
import { mapStateToProp ,toggle } from "../testData/repeatingFunctions";

function SignUp(props){
   const { dispatch } = props
   const [ fields , setFields ]= useState({})
   

   const submit = (e) => {
      e.preventDefault()
dispatch({
   type : LOG_USER, 
   payload : { user : fields}
})      
toggle('form')

setFields({})  
   
   }
   const checkField= (e) =>{
      let target = e.target, 
      msg = '';

      switch (target.name) {
         
         case 'name':
            msg = (target.value ==='') && 'username cant be empty'
            break;
         case 'password' :
            msg = (target.value === '') && 'password cant be empty'
            break;
         default:
            break;
      }

      setFields({...fields , [target.name] : target.value})

   }
      return <section className="sign-in">
         <form className="startUp"
         onChange = {checkField}
         onSubmit = { submit}>

            <div className="form-div">
               <label className="label">
                  Email
               </label>
               <input className='input' autoComplete="true" placeholder="enter username or email" 
               name='email'

               />

               <label className="label">
                  Password
               </label>
               <input name = 'password' className='input' autoComplete="true" type='password' placeholder="enter password" />


               <input className='input' type="submit" id="signUp" value="signIn" 
          />

               <p> Don't have an account &nbsp;  <a className="signUp cp" 
               onClick={()=>props.changeSigns()}
              >
                  Sign up
               </a></p>
            </div>
         </form>

      </section>

   
}

export default connect(mapStateToProp('user'))(SignUp)