const conexion = require('../config/database');

class UsuarioRepository {

    async getAll(tabla) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async login(tabla, correo) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla} WHERE correo = '${correo}'`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async getById(tabla, id) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async update(tabla, data) {
        return new Promise((resolve, reject) => {
            conexion.query(`UPDATE ${tabla} SET nombre = ?, apellido = ?, edad = ?, contrasena = ?, estado = ? WHERE id = ?`,
                [data.nombre, data.apellido, data.edad, data.contrasena, data.estado, data.id], (error, result) => {
                    return error ? reject(error) : resolve(result);
                });
        });
    }

    async create(tabla, data) {
        return new Promise((resolve, reject) => {
            conexion.query(`INSERT INTO ${tabla} (nombre, apellido, edad, contrasena, correo, estado) VALUES (?, ?, ?, ?, ?, ?)`, [data.nombre, data.apellido, data.edad, data.contrasena, data.correo, data.estado], (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async delete(tabla, data) {
        return new Promise((resolve, reject) => {
            conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

}

module.exports = new UsuarioRepository();