const mysql = require('mysql');
const config = require('../config/config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
};

let conexion;

function connect() {
    conexion = mysql.createConnection(dbconfig);

    conexion.connect(function(err) {
        if (err) {
            console.log('[db err]', err);
            setTimeout(connect, 200);
        } else {
            console.log('[db connected]');
        }
    });

    conexion.on('error', function(err) {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            throw err;
        }
    });
}

connect();

module.exports = conexion;