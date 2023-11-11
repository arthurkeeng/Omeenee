

import FooterOne from "../miniComponents/FooterOne" 

import FooterTwo from "../miniComponents/FooterTwo"
// this is imported in the shared components 
// located in the subcomponents folder
const Footer = () =>{
   return <footer id="footer">
      <FooterOne/>
      <FooterTwo/>
   </footer>

   
}

export default Footer