const mySql = require('mysql');

const connection = mySql.createConnection({
    host: 'containers-us-west-52.railway.app',
    user: 'root',
    password: 'kyH4nTbHgvo6VUP2FCO4',
    database: 'railway',
    port: '7942'
});

module.exports = connection;