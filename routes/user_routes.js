const express = require("express");
const router = express.Router();

const {getAllUserController, getByIdUserController} = require("../controller/user_controller.js");

// Route GET to retrieve information | Route GET pour récupéré les informations

router.get("/", getAllUserController);
router.get("/:id", getByIdUserController);

module.exports = router;