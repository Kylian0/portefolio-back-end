const express = require("express");
const router = express.Router();

const {getAllUserController, getByIdUserController, createUserController} = require("../controller/user_controller.js");

// Route GET to retrieve information | Route GET pour récupéré les informations

router.get("/", getAllUserController);
router.get("/:id", getByIdUserController);

// Route POST to create information | Route CREATE pour crée les informations

router.post("/", createUserController);

module.exports = router;