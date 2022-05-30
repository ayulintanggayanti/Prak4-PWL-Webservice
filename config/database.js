const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'containers-us-west-52.railway.app',
    port: 7942,
    user: 'root',
    password: 'kyH4nTbHgvo6VUP2FCO4',
    database: 'railway',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = connection;