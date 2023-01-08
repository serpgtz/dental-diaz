const express = require("express");
const {postContac} = require("../controllers/contactcontollers")

const router = express.Router();



// create contact
router.post("/contact",postContac)
module.exports = router