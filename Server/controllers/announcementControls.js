
const Announcements = require('../models/announcement.model')



const getAnnouncement = async( req , res ) => {
   try {
      const announcements = await Announcements.find({})
      console.log(announcements);
      res.json( {announcements} )
      
   } catch (error) {
      res.json({ msg : 'something went wrong'})
   }
}



module.exports  = {  getAnnouncement }