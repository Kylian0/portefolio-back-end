const connection = require("../middleware/database.js");


async function getAllLanguageModel() {
    let conn;
    try {
        conn = await connection.getConnection();
        const [rows] = await conn.query("SELECT * FROM languages");
        return rows;
    } catch (error) {
        console.error("Erreur lors de la récupérations des languages :", error);
        throw error;
    } finally {
        if (conn) conn.release();
    }
};

async function getByIdLanguageModel(id) {
    let conn;
    try {
        conn = await connection.getConnection();
        const [rows] = await conn.query("SELECT * FROM languages WHERE Id_languages = ?", [id]);
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Erreur lors de la récupérations du langages séléctionner par son identifant", error);
        throw error;
    } finally {
        if (conn) conn.release();
    }
};

module.exports = { getAllLanguageModel, getByIdLanguageModel };
