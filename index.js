const express = require("express");
const path = require('path')
const app = express();
const cors = require('cors');
const Web3 = require('web3');
const abi = require('./abi')
const contractAdress = "0xb5465ED8EcD4F79dD4BE10A7C8e7a50664e5eeEB"
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
const PORT = process.env.PORT || 5000
app.use(
    cors()
);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/commoner/:token", function(req, res) {
    var token = req.params.token;
    res.render("commoner.ejs", { token: token });
});
app.get("/youtube-connect", function(req, res) {
    res.render("youtubeConnect");
});
app.get("/firefox-checkout", function(req, res) {
    res.render("firefoxCheckout");
});
app.post('/create', (req, res) => {
    console.log(req.body.userHash);
    res.sendStatus(200);

    web3.eth.defaultAccount = "0x1Fd8f9d816D4C11Fb9E3765DaB065a0CbC2B909D";
    var ComonzContract = new web3.eth.Contract(abi, contractAdress);
    ComonzContract.methods.mintNft('0x5FD6eB55D12E759a21C09eF703fe0CBa1DC9d88D', 'http://' + req.body.userHash, req.body.userHash);

});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))