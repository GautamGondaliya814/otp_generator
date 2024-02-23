var express = require('express');
var router = express.Router();
var controller = require("../controller/otp")

/* GET home page. */
router.get('/mail',controller.send_mail);

module.exports = router;
