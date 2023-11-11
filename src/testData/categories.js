
// these are the product images that would be used 
// in the component. this is just a demo until a database
// is employed
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpeg'
import img3 from '../images/3.jpg'
import img4 from '../images/3.jpg'
import img5 from '../images/4.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/foot1.jpg'
import img9 from '../images/foot2.jpg'
import img10 from '../images/foot3.jpg'
import img11 from '../images/foot4.jpg'
import img12 from '../images/foot5.jpg'
import img13 from '../images/foot6.jpg'
import img14 from '../images/foot7.jpg'
import img15 from '../images/foot8.jpg'
import img16 from '../images/foot9.jpg'
import img17 from '../images/foot10.jpg'
import img18 from '../images/foot11.jpg'
import img19 from '../images/shirt1.jpg'
import img20 from '../images/trackSuit.jpg'
import img21 from '../images/uten1.jpg'
import img22 from '../images/uten2.jpg'
import img23 from '../images/uten3.jpg'
import img24 from '../images/uten4.jpg'
import img25 from '../images/uten5.jpg'
import img26 from '../images/uten6.jpg'
import img27 from '../images/uten7.jpg'
import img28 from '../images/uten8.jpg'
import events from '../images/events.jpeg'
import tutor from '../images/tutor.jpeg'
import photographer from '../images/photographer.jpeg'
import videographer from '../images/videographer.jpeg'
import img33 from '../images/laundry.jpeg'
import { merged } from './repeatingFunctions'




// this is how the item list would be structured
// where each category would have its name and 
// have its products set in an array

export const items= [
   {
      service :
       [ 
         {
      id: 'service0',
      name: 'Videographer',
      img: videographer,

      description: `
      
      Watch us perform cinematic magic. For all your videographic jobs, you
                     can certainly count on us to provide you with that BLOCKBUSTER FEEL.
               `,
      price: 19550,
            sizes: [100 , 200 , 300 , 400 ," ABOVE"],
       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787,
      

   },
   {
      id: 'service1',
      name: 'Tutor',
      img: tutor,
      description: `We offer tutoring services for a
                  wide range of subjects and skills from 
                  SCIENCES , NON-SCIENCES. PLEASE NOTE THAT
                  THE PRICE REFLECT THE PRICE FOR A SUBJECT.
                  THIS IS HOW MUCH TUTORSHIP FOR EACH SUBJECT
                  COSTS. We also teach skills like CODING, GRAPHICS DESIGN
                   , ETC.
                  `,
      price: 19550,
      category : 'Cleaning',
      available : true,
   vN : 'smartWears',
   vC : 898787 ,
    
   },
   {
      id: 'service2',
      name: 'Photographer',
      img: photographer,
      description: `If you want that instagram perfect picture
                     just hit us up and we'd help you create magic
                     What you need is experienced hands to put that
                     divine touch on your picutures. BECAUSE
                     SAYING CHEESE IS TEMPORAL BUT PICTURES ARE ETERNAL...
                     `,
      price: 19550,

       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787,


   },
   {
      id: 'service0',
      name: 'events',
      img: events,
      description: `We help you handle your 
      events. All you need to do is to put your feet up and worry about nothing 
      .We cover decoration , catering , videography and everything that would
      make your events surely memorable.


      PLEASE NOTE THAT THE PRICE IS PER 100 PEOPLE
      AND THE SELECTION IS BASED ON THE NUMBER OF PEOPLE / 100
      
                     `,
      price: 19550,
            sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787,


   },
   


]
},
{
   food : [ 
      {
   id: 'food0',
   name: 'camerole ',
   img: img2,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787,


},      {
   id: 'food0',
   name: 'camerole ',
   img: img2,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},      {
   id: 'food0',
   name: 'camerole ',
   img: img2,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},      {
   id: 'food0',
   name: 'camerole ',
   img: img2,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'food1',
   name: 'deircaleo',
   img: img1,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                      w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19765,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'food2',
   name: 'celaomesa',
   img: img3,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                      w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19765,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787
}
]

},
{
   fashion : [ 
      {
   id: 'fashion0',
   name: 'camerole ',
   img: img3,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'fashion1',
   name: 'camerole ',
   img: img4,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'fashion2',
   name: 'camerole ',
   img: img6,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'fashion4',
   name: 'camerole ',
   img: img20,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'fashion5',
   name: 'camerole ',
   img: img19,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},
]
},
{
   computers : [
       {
   id: 'computer0',
   name: 'camerole ',
   img: img4,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'computer1',
   name: 'camerole ',
   img: img2,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 10965,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787

},
]
},
{
   artwork : [ {
   id: 'art0',
   name: 'camerole ',
   img: img6,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   category: 'fashion',
   available : true,
   vN : 'smartWears',
   vC : 898787

},]
},
   {
      footWears : 
      [
         {
            id: 'foot0',
            name: 'camerole ',
            img: img8,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot1',
            name: 'camerole ',
            img: img9,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot3',
            name: 'camerole ',
            img: img10,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot4',
            name: 'camerole ',
            img: img11,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot5',
            name: 'camerole ',
            img: img12,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot6',
            name: 'camerole ',
            img: img13,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot7',
            name: 'camerole ',
            img: img14,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot8',
            name: 'camerole ',
            img: img15,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot9',
            name: 'camerole ',
            img: img16,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot10',
            name: 'camerole ',
            img: img17,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
         {
            id: 'foot11',
            name: 'camerole ',
            img: img18,
            description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew 
                              lorem isdugie sldoe aruie a foe ew ro erea r osre
                              sdfie w oe =r e wew ew sao xmkew `,
            price: 10000,
                  sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
             category : 'Laundry',
             available : true,
   vN : 'smartWears',
   vC : 898787
      
         },
       

      ]
},
{
   others: [ {
   id: 'other0',
   name: 'camerole ',
   img: img7,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
   available : true,
   vN : 'smartWears',
   vC : 898787

}]
},   
{
   tools :
    [ 
      {
   id: 'uten0',
   name: 'caserole ',
   img: img21,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
    category : 'Laundry',
    available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'uten1',
   name: 'dicatior ',
   img: img22,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     e w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
   category : 'Cleaning',
   available : true,
   vN : 'smartWears',
   vC : 898787
},
{
   id: 'uten2',
   name: 'dopz oole ',
   img: img23,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
   category : 'Events Planner',
   available : true,
   vN : 'smartWears',
   vC : 898787

}
, {
   id: 'uten4',
   name: 'camerole ',
   img: img24,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
    category : 'Laundry',
    available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'uten5',
   name: 'camerole ',
   img: img25,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
    category : 'Laundry',
    available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'uten0',
   name: 'caserole ',
   img: img26,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
    category : 'Laundry',
    available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'uten0',
   name: 'caserole ',
   img: img27,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
    category : 'Laundry',
    available : true,
   vN : 'smartWears',
   vC : 898787

},
{
   id: 'uten0',
   name: 'caserole ',
   img: img28,
   description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew 
                     lorem isdugie sldoe aruie a foe ew ro erea r osre
                     sdfie w oe =r e wew ew sao xmkew `,
   price: 19550,
         sizes: [45, 54, 26, 76, 59],
   colors : [ 'red' , 'gold' , 'green'],
    category : 'Laundry',
    available : true,
   vN : 'smartWears',
   vC : 898787

},

]
}

      
]

export const orders = [
   {_id : 'e32dsq',
     timestamp: "adfe",
     items: [
      {
         id : 1,
         name : 'beanie',
         image : img1,
         price : 4345, 
         quantity : 4,
         total : 56788,
         size : 43, 
         color : 'red',
         vendorName : 'kwel', 
         vendorContact : 43235345
      },      {
         id : 1,
         name : 'beanie',
         image : img1,
         price : 4345, 
         quantity : 4,
         total : 56788,
         size : 43, 
         color : 'red',
         vendorName : 'kwel', 
         vendorContact : 43235345
      },      {
         id : 1,
         name : 'beanie',
         image : img1,
         price : 4345, 
         quantity : 4,
         total : 56788,
         size : 43, 
         color : 'red',
         vendorName : 'kwel', 
         vendorContact : 43235345
      },
  ],
     delivered: false,
     handled : false , 
     address : 'sdherw are',
     phone : 39495,
     paid : true,
   vN : 'smartWears',
   vC : 898787,
     amount  : 40000
   },

   {_id : 'e32ewe',
    timestamp: "14",
     items: [      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },],    delivered: false,
    handled : false , 
    address : 'sdherw are',
    phone : 39495,
    paid : true,
   vN : 'smartWears',
   vC : 898787,
    amount  : 40000
  },

  {_id : 'e32gs32',
    timestamp: "14",
     items: [      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },],    delivered: false,
    handled : false , 
    address : 'sdherw are',
    phone : 39495,
    paid : true,
   vN : 'smartWears',
   vC : 898787,
    amount  : 40000
  },

  {_id : 'e32sgqa',
    timestamp: "14",
     items: [      {
      id : 1,
      name : 'beanie',
      image : img1,
      price : 4345, 
      quantity : 4,
      total : 56788,
      size : 43, 
      color : 'red',
      vendorName : 'kwel', 
      vendorContact : 43235345
   },],    delivered: false,
    handled : false , 
    address : 'sdherw are',
    phone : 39495,
    paid : true,
   vN : 'smartWears',
   vC : 898787,
    amount  : 40000
  },
 ];

 export const rawItems = [

   {  
      section : 'food',
      name: 'caserole',
      id: 'uten0',
      img: img1,
      description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew `,
      price: 19550,
            sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787

   },
   {
      section : 'fashio',
      name : 'case',
      id: 'uten0',
      img: img1,
      description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew `,
      price: 19550,
            sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787

   },
   {
      section : 'food',
      name : 'ca',
      id: 'uten0',
      img: img1,
      description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew `,
      price: 19550,
            sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787

   },
   {
      section : 'service',
      name : 'casroe',
      id: 'uten0',
      img: img1,
      description: `lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew 
                        lorem isdugie sldoe aruie a foe ew ro erea r osre
                        sdfie w oe =r e wew ew sao xmkew `,
      price: 19550,
            sizes: [45, 54, 26, 76, 59],
      colors : [ 'red' , 'gold' , 'green'],
       category : 'Laundry',
       available : true,
   vN : 'smartWears',
   vC : 898787

   },
 ]



