const {getAllLanguageModel, getByIdLanguageModel, createLanguageModel} = require(`../model/languages_model.js`);

// Controller de getAll pour la table language.

async function getAllLanguageController(req, res) {
    try {
        const languages = await getAllLanguageModel();
        res.status(200).json(languages);
    } catch (error) {
        res.status(500).json({error : "Erreur lors de la récupérations de tout les languages"});
    }
}

// Controller du GetById pour la table language

async function getByIdLanguageController(req, res) {
    const id = parseInt(req.params.id, 10); // Assure que l'ID est un nombre
    
    // Vérifie si l'ID est bien un nombre valide
    if (isNaN(id)) {
        return res.status(400).json({error : "L'ID doit être un nombre valide"})
    }

    try {
        const language = await getByIdLanguageModel(id);
        if (!language) {
            return res.status(404).json({error : "Langage non trouvé"});
        }
        res.status(200).json(language);
    } catch (error) {
        res.status(500).json({error : "Erreur lors de la récupération du langage"});
    }
}

// Controller du Create pour la table language

async function createLanguageController(req, res) {

    const {name_language, level_language} = req.body;

    // Véréfication des champs requis
    if (!name_language || typeof name_language !== "string" || !level_language || typeof level_language !== "string") {
        return res.status(400).json({error : "Le nom du langage et le niveau son requis et doivent être des chaînes de caractères"});
    }

    try {
        const newLanguage = await createLanguageModel(name_language, level_language);
        res.status(201).json(newLanguage);
    } catch (error) {
        res.status(500).json({error : "Erreur lors de la création du langage"});
    }
}

module.exports = { getAllLanguageController, getByIdLanguageController, createLanguageController };