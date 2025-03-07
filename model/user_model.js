const connection = require("../middleware/database.js");

// CRUD: GETALL for personal information table | GETALL pour la table informations personnel (MODEL)

async function getAllUserModel() {
    
    let conn

    try {
        conn = await connection.getConnection();
        const [rows] = await conn.query("SELECT * FROM personal_information");
        return rows;
    } catch (error) {
        console.error("Error while retrieving personal information", error);
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

module.exports = {getAllUserModel};