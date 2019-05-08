const mysql = require('mysql');
const dbConnect = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ebor'
});

module.exports = dbConnect;
