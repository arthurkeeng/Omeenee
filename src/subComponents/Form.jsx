

// this is used in the app component


import { useState } from "react"

import SignIn from "./SignIn"
import SignUp from "./SignUp"

function Form(){
  const [ signedIn , setSignedIn ] = useState(false)
  

   // this function toggles the sign in and sign up components
   const changeSigns = () => {
    
      setSignedIn(!signedIn)
   }

      return <main className="mainForm oh" id = 'form'>
         {/* this conditionally renders the
         the sign in and sign up components dependind if signedIn is true
         */}
         { signedIn ? <SignIn 
         changeSigns = {() => changeSigns()} /> :
      <SignUp changeSigns = {() => changeSigns() }
/>}
      </main>

}






export default Form
