const express = require("express");
const router = express.Router();
const {
  getProducts,
  getSingleProduct,

} = require("../controllers/shopsControls");

router.route("/").get(getProducts)
router.route("/:name").get(getSingleProduct)

module.exports = router;
