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

// CRUD: GETBYID for personal information table | GETBYID pour la table informations personnel (MODEL)

async function getByIdUserModel(id) {

    let conn;

    try {
        conn = await connection.getConnection();
        const [rows] = await conn.query("SELECT * FROM personal_information WHERE id_personnal_information = ?",
            [id]
        );
        return rows.length > 0 ? rows[0] : null;
    } catch (error) {
        console.error("Error while retrieving personal information by ID :", error);
        throw error;
    } finally {
        if (conn) conn.release();
    }
}

// CRUD: CREATE for personal information table | CREATE pour la table informations personnel (MODEL)

async function createUserModel(userData) {

    let conn;

    try {
        conn = await connection.getConnection();

        const {first_name, last_name, age, adress, phone, email, driving_licence, git_profile, hobbies} = userData;

        const query = `INSERT INTO personal_information (first_name, last_name, age, adress, phone, email, driving_licence, git_profile, hobbies)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const [result] = await conn.query(query, [first_name, last_name, age, adress, phone, email, driving_licence, git_profile, hobbies]);

        return {id_personnal_information: result.insertId, ...userData};
    } catch (error) {
        console.error("Error during user insertion :", error);
    } finally {
        if (conn) conn.release();
    }
}

module.exports = {getAllUserModel, getByIdUserModel, createUserModel};