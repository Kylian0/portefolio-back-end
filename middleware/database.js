const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portefolio_database",
})

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion :', err);
        return
    }
    console.log('Connexion à la base de données réussie')
})

module.exports = { connection }; 