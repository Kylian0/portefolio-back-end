const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const connection = require("./middleware/database.js")
const languagesRoute = require("./routes/languages_routes.js");

const app = express();

dotenv.config();

// Routes
app.use("/languages", languagesRoute);

app.use(bodyParser.json());

app.use(cors());

app.use("*", cors());

const port = Number(process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;