const { getAllExperiencesController, getByIdExperiencesController, createExperiencesController } = require("../controller/experiences_controller.js");

const express = require("express");
const router = express.Router();

// Différentes routes des différentes CRUD pour la table experience

router.get("/", getAllExperiencesController);
router.get("/:id", getByIdExperiencesController);
router.post("/", createExperiencesController);

module.exports = router