const express = require("express");
const router = express.Router();

const {getAllUserController} = require("../controller/user_controller.js");

// Route GET to retrieve information | Route GET pour récupéré les informations

router.get("/", getAllUserController);

module.exports = router;