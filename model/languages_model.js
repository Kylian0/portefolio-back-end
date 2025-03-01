const connection = require("../middleware/database.js");

// Model du getAll pour la table language

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

// Model du getById pour la table language

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

// Model pour le Create de la table language

async function createLanguageModel(name_language, level_language) {
    let conn;

    try {
        conn = await connection.getConnection();

        const [result] = await conn.query("INSERT INTO languages (name_language, level_language) VALUES (?, ?)",
            [name_language, level_language]
        );
        return { id: result.insertId, name_language, level_language }
    } catch (error) {
        console.error("Erreur lors de la création du langage");
    } finally {
        if (conn) conn.release();
    }
}

// Model pour le Delete de la table language

async function deleteLanguageModel(id) {
    let conn;
    try {
        conn = await connection.getConnection();

        const [check] = await conn.query("SELECT * FROM languages WHERE Id_languages = ?", [id]);
        if (check.length === 0) {
            return { success: false, message: "Langage non toruvé" };
        }

        await conn.query("DELETE FROM languages WHERE Id_languages = ?", [id]);
        return { success: true, message: "Langage supprimé avec succès" };

    } catch (error) {
        console.error("Erreur lors de la suppression du langage : ", error);
    } finally {
        if (conn) conn.release();
    }
}

// Model pour le UPDATE de la table language

async function updateLanguageModel(id, name_language, level_language) {
    let conn;

    console.log("Vérification de l'id dans la bdd", id);

    try {
        conn = await connection.getConnection();
        
        const [check] = await conn.query("SELECT * FROM languages WHERE Id_languages = ?", [id]);
        if (check.length === 0) {
            return { success: false, message: "Langage non trouvé" };
        }

        console.log("Données reçues pour une mise à jour", {name_language, level_language});

        await conn.query("UPDATE languages SET name_language = ?, level_language = ? WHERE Id_languages = ?",
            [name_language, level_language, id]
        )

        return { success: true, message: "Langage mis à jour avec succès" };
    } catch (error) {
        console.error({error: "Erreur lors de la mise à jour du langage"});
    } finally {
        if (conn) conn.release();
    }
}

module.exports = { getAllLanguageModel, getByIdLanguageModel, createLanguageModel, deleteLanguageModel, updateLanguageModel };
