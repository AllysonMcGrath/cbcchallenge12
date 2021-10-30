const mysql = require('mysql2');
const

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: ,
        database: 'employees'
    },
    console.log('Connected to the election database.')
);

module.exports = db;