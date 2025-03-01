const { getAllExperiencesController } = require("../controller/experiences_controller.js");

const express = require("express");
const router = express.Router();

// Différentes routes des différentes CRUD pour la table experience

router.get("/", getAllExperiencesController);

module.exports = router