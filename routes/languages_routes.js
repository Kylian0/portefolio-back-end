const getAllLanguageController = require(`../controller/languages_controller.js`);

const express = require("express");
const router = express.Router();

router.get("/", getAllLanguageController.getAllLanguageController);

module.exports = router