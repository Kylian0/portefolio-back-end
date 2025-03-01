const { getAllExperiencesModel } = require("../model/experiences_model.js");

async function getAllExperiencesController(req, res) {
    try {
        const experiences = await getAllExperiencesModel();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({error: "Erreur lors de la récupération des expériences !"});
    }
}

module.exports = { getAllExperiencesController };