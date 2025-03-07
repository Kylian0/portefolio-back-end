const { getAllExperiencesModel, getByIdExperiencesModel, createExperiencesModel } = require("../model/experiences_model.js");

// Controller de GETALL pour la table experience.

async function getAllExperiencesController(req, res) {
    try {
        const experiences = await getAllExperiencesModel();
        res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des expériences !" });
    }
};

// Controller de GETBYID pour la table experience.

async function getByIdExperiencesController(req, res) {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ error: "L'ID doit être un nombre valide" });
    }

    try {
        const experience = await getByIdExperiencesModel(id);
        if (!experience) {
            res.status(404).json({ error: "Expérience non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération de l'expériences" });
    }
};

// Controller de CREATE pour la table experience.

async function createExperiencesController(req, res) {

    const { job_title, company_name, location, duration, description } = req.body;

    if (!job_title || typeof job_title !== "string" || !company_name || typeof company_name !== "string" || !location || typeof location !== "string"
        || !duration || typeof duration !== "number" || !description || typeof description !== "string") {
        return res.status(400).json({ error: "Les champs sont requis et doivent être respecter celon leurs normes" })
    }

    try {
        const newExperience = await createExperiencesModel(job_title, company_name, location, duration, description);
        res.status(201).json(newExperience);
    } catch (error) {
        res.status(500).json({error: "Erreur lors de la création de l'experiences"})
    }
};

module.exports = { getAllExperiencesController, getByIdExperiencesController, createExperiencesController };