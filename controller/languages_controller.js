const {getAllLanguageModel} = require(`../model/languages_model.js`);

async function getAllLanguageController(req, res) {
    try {
        const languages = await getAllLanguageModel();
        res.status(200).json(languages);
    } catch (error) {
        res.status(500).json({error : "Erreur lors de la récupérations de tout les languages"});
    }
}

module.exports = { getAllLanguageController };