const connection = require("../middleware/database.js");

// GETALL Model for the table experiences

async function getAllExperiencesModel() {
    let conn;

    try {
        conn = await connection.getConnection();
        const [rows] = await conn.query("SELECT * FROM experiences ORDER BY duration DESC");
        return rows;
    } catch (error) {
        console.error("Erreur lors de la récupération des informations de l'expérience : ", error);
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

// GETBYID Model for the table experiences

async function getByIdExperiencesModel(id) {
    let conn;

    try {
        conn = await connection.getConnection()
        const [rows] = await conn.query("SELECT * FROM experiences WHERE Id_experiences = ?", [id]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'expériences par son ID", error);
    } finally {
        if (conn) conn.release();
    }
}

module.exports = { getAllExperiencesModel, getByIdExperiencesModel };