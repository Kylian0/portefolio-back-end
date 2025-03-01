const pool = require("../middleware/database.js")

const mysql2 = require("mysql2/promise");


async function getAllLanguageModel() {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.query("SELECT * FROM languages");
        return rows;
    } catch (error) {
        console.error("Erreur lors de la récupérations des languages :", error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
}

module.exports = { getAllLanguageModel }
