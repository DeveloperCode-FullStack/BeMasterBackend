const usuarioRepository = require('../repositories/usuario_repository');

class UsuarioService {
    constructor() {
        this.usuarioRepository = usuarioRepository;
    }

    async getAll(tabla) {
        return await this.usuarioRepository.getAll(tabla);
    }

    async getById(tabla, id) {
        return await this.usuarioRepository.getById(tabla, id);
    }

    async create(tabla, data) {
        return await this.usuarioRepository.create(tabla, data);
    }

    async update(tabla, data) {
        return await this.usuarioRepository.update(tabla, data);
    }

    async delete(tabla, data) {
        return await this.usuarioRepository.delete(tabla, data);
    }

    async login(tabla, nombre) {
        return await this.usuarioRepository.login(tabla, nombre);
    }

}

module.exports = new  UsuarioService();