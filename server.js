const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const connection = require("./middleware/database.js")

const userRoute = require("./routes/user_routes.js");
const languagesRoute = require("./routes/languages_routes.js");
const experiencesRoute = require("./routes/experiences_routes.js");

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use("*", cors());

// Routes http

app.use("/user", userRoute);
app.use("/languages", languagesRoute);
app.use("/experiences", experiencesRoute);

const port = Number(process.env.PORT || 3001);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;