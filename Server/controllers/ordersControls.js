const Orders = require("../models/order.model");



const postOrder = async (req, res) => {
  try {
    const orders = await Orders.create(req.body);
    res.json({ msg: "order posted" });
  } catch (error) {
    res.json({ msg: "order failed , try again " });
  }
};




module.exports = {

  postOrder,
};
