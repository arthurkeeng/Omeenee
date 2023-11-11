
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import { items , rawItems} from "../testData/categories";
import   messages  from "../testData/message";
import { ads } from "../testData/adsContent";
import { merged } from "../testData/repeatingFunctions";



// this sets the initial store
const initialStore = {
   // ads is for the ad section 
   // this is where the adverts are gotten
   ads ,

   // raw items is for the data in their raw state
   // as gotten from the database
   rawItems ,

   // items is the converted data to look like
   // the data structure of app
   items ,
   
   // messages represent the announcement section
   messages ,

   // this is used by the see all 
   allProducts : merged(items),

   // this is used when you need to get one product
   oneProduct : {},

   show : false,
   
   cart : [] ,
   cartTotal : 0,
   orders : [],
   user : {},
   users : []

}

// this creates the store , the createstore takes two arguments, reducer
// and the initial state
const store = createStore( reducer , initialStore )

export default store