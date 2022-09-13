const express=require('express');
const router=express.Router();
const payment=require('../controller/donation')
const webhook=require('../controller/listener')
var bodyParser = require('body-parser')

 
// create application/json parser
var jsonParser = bodyParser.json()



router.get('/',payment.home);
router.post('/donorPay',jsonParser,payment.donorPay);
 router.post('/donorWebhook',jsonParser,webhook.donorPaid);


module.exports=router;