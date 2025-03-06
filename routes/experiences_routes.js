const { getAllExperiencesController, getByIdExperiencesController } = require("../controller/experiences_controller.js");

const express = require("express");
const router = express.Router();

// Différentes routes des différentes CRUD pour la table experience

router.get("/", getAllExperiencesController);
router.get("/:id", getByIdExperiencesController);

module.exports = router