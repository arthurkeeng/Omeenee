// const cors = require("cors");
// const express = require("express");
// const app = express();
// const authorize = require("./middleware/authorize");
// const shopRouter = require("./routes/shopRouter");
// const orderRouter = require("./routes/orderRouter");
// const announcementRouter = require("./routes/announcementRouter");
// const advertRouter = require("./routes/advertRouter");
// const connection = require("./database/connection");
// const PORT = process.env.PORT || 3000;

// require("dotenv").config();

// app.use(cors());
// app.use(express.json());

// app.use("/omeenee/shops", shopRouter);
// app.use("/omeenee/orders", orderRouter);
// app.use("/omeenee/announcements", announcementRouter);
// app.use("/omeenee/advert", advertRouter);



// const start = async () => {
//   try {
//     await connection(process.env.MONGO_URL)
//     app.listen(3000, () => console.log("listening..."));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();



// building api with node




const express = require('express')
const PORT = 3000
const app = express()

app.get('/' , (req,res) => res.json({status : 'hello there'}))

app.listen(PORT , console.log('working perfectly'))