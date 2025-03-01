const {getAllLanguageController, getByIdLanguageController, createLanguageController} = require(`../controller/languages_controller.js`);

const express = require("express");
const router = express.Router();

// Différentes routes des différentes CRUD pour la table langage

router.get("/", getAllLanguageController);
router.get("/:id", getByIdLanguageController);
router.post("/", createLanguageController);

module.exports = router