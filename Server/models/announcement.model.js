
const mongoose = require('mongoose')

const AnnouncementSchema = new mongoose.Schema({
   name : {
      type : String,
      unique : true
   
   },
   message : Array
})

module.exports = mongoose.model('Announcements' , AnnouncementSchema)