const {getAllUserModel, getByIdUserModel, createUserModel} = require("../model/user_model.js");

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

// CRUD: CREATE for personal information table | CREATE pour la table informations personnel (CONTROLLER)

async function createUserController(req, res) {
    const {first_name, last_name, age, adress, phone, email, driving_licence, git_profile, hobbies} = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).json({error: "First name, last name and email are required"});
    }

    try {
        const newUser = await createUserModel({first_name, last_name, age, adress, phone, email, driving_licence, git_profile, hobbies});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: "Error while creating user"});
    }
}

module.exports = {getAllUserController, getByIdUserController, createUserController};