const mysql = require('mysql');
const dbConnect = mysql.createPool({
    host: 'remotemysql.com',
    user: 'oyxsJIV2xp',
    password: 'JF3hHjPP9J',
    database: 'oyxsJIV2xp'
});

module.exports = dbConnect;
