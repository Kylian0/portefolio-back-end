const { getAllExperiencesModel, getByIdExperiencesModel } = require("../model/experiences_model.js");

// Controller de GETALL pour la table experience.

async function getAllExperiencesController(req, res) {
    try {
        const experiences = await getAllExperiencesModel();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({error: "Erreur lors de la récupération des expériences !"});
    }
};

// Controller de GETBYID pour la table experience.

async function getByIdExperiencesController(req, res) {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({error : "L'ID doit être un nombre valide"});
    }

    try {
        const experience = await getByIdExperiencesModel(id);
        if(!experience) {
            res.status(404).json({error : "Expérience non trouvé"});
        }
    } catch (error) {
        res.status(500).json({error : "Erreur lors de la récupération de l'expériences"});
    }
};

module.exports = { getAllExperiencesController, getByIdExperiencesController };