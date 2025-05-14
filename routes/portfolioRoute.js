const express = require("express")
const { sendEmailController } = require('../controllers/portfolioController')

// router object
const router = express.Router()

//routes 
router.post('/sendEmail',sendEmailController)

// module export
module.exports = router