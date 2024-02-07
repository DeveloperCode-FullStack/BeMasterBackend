const conexion = require('../config/database');

class VideoService {

    async getAll(tabla) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
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

    async create(tabla, data) {
        return new Promise((resolve, reject) => {
            conexion.query(`INSERT INTO ${tabla} (nombre, tipo, calificacion, usuario_id) VALUES (?, ?, ?, ?)`, [data.nombre, data.tipo, data.calificacion, data.usuario_id], (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async update(tabla, data) {
        return new Promise((resolve, reject) => {
            conexion.query(`UPDATE ${tabla} SET nombre = ?, tipo = ?, calificacion = ?, usuario_id = ? WHERE id = ?`,
            [data.nombre, data.tipo, data.calificacion, data.usuario_id, data.id], (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    }

    async delete(tabla, data) {
        return new Promise((resolve, reject) => {
            conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async getPublic(tabla) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla} WHERE tipo = 0`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async getPrivate(tabla) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla} WHERE tipo = 1`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async getVideoUsuario(tabla, id) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla} WHERE usuario_id = ${id}`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

    async getCalificacion(tabla) {
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM ${tabla} WHERE calificacion > 5 ORDER BY calificacion DESC`, (error, result) => {
                return error ? reject(error) : resolve(result);
            });
        });
    };

}

module.exports = new VideoService();