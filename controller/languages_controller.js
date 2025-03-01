const {getAllLanguageModel, getByIdLanguageModel} = require(`../model/languages_model.js`);

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

module.exports = { getAllLanguageController, getByIdLanguageController };