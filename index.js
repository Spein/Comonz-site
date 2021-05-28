const express = require("express");
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/commoner/:token", function(req, res) {
    var token = req.params.token;
    res.render("commoner.ejs", { token: token });
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))