const Contact = require("../models/contact")


const postContac = async (req, res) => {
    try {
      const contanct = new Contact(req.body);
      const contactSave = await contanct.save();
  
      return res.status(200).json(contactSave);
    } catch (error) {
      console.log(error);
    }
  };


  module.exports = {
    postContac,
  };