const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./middleware/database.js")

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listen on PORT ${port}`);
})