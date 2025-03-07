const {getAllUserModel, getByIdUserModel} = require("../model/user_model.js");

// CRUD: GETALL for personal information table | GETALL pour la table informations personnel (CONTROLLER)

async function getAllUserController(req, res) {
    try {
        const userData = await getAllUserModel();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error: "Error while retrieving personal information"});
    }
}

// CRUD: GETBYID for personal information table | GETBYID pour la table informations personnel (CONTROLLER)

async function getByIdUserController(req, res) {

    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({error: "ID must be a valid number"});
    }

    try {
        const user = await getByIdUserModel(id);
        if(!user) {
            return res.status(404).json({error : "User not found"});
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({error: "Error while retrieving personal information"});
    }
}

module.exports = {getAllUserController, getByIdUserController};