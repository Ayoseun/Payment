
const { v4: uuidv4 } = require('uuid');
const ID = require("nodejs-unique-numeric-id-generator");
const axios = require('axios');
var gg = '';
var userID = '';
let yourID = '';
var name = "";
var surName = "";
var middleName = "";









const home =async (req, res, next) => {

    res.json("Ayo Solomon,Chinwendu Iheanetu,Micheal Oladipopo presents Sopa-Ereto first place winner at Hack The Mara"
    );
}














const donorPay =async (req, res, next) => {
    // Use https://payment.intasend.com/api/v1/checkout/ for live payments
    let url = "https://sandbox.intasend.com/api/v1/checkout/"
    let payload = {
        public_key: "ISPubKey_test_f68ed540-801e-468b-a5a2-ce396f82c2b4",
        amount: req.body.amount,
        currency: "KES",
        // currency: req.body.currency,
        // email: req.body.email,
         email: "NancyAmadi@gmail.com",
        // first_name: "Iheanetu",
        // last_name: "Chiwendu",
        //country: req.body.country,
        "redirect_url": "https://sopa-ereto.vercel.app/donor",
    }
    axios.post(url, payload).then((resp) => {
        if (resp.data.url) {
         res.json({
        status: 200,
        data: resp.data
    });
        }
    })
    
};



module.exports = {
    home,
    donorPay

};