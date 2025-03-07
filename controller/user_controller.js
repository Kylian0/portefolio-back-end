const {getAllUserModel} = require("../model/user_model.js");

async function getAllUserController(req, res) {
    try {
        const userData = await getAllUserModel();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({error: "Error while retrieving personal information"});
    }
}

module.exports = {getAllUserController};