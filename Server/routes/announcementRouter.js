const express = require("express");

const router = express.Router();
const { getAnnouncement } = require("../controllers/announcementControls");


router.route('/').get(getAnnouncement)

module.exports = router;
