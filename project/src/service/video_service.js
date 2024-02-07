const videoRepository = require('../repositories/video_repository');

class VideoService {
    constructor() {
        this.videoRepository = videoRepository;
    }

    async getAll(tabla) {
        return await this.videoRepository.getAll(tabla);
    }

    async getById(tabla, id) {
        return await this.videoRepository.getById(tabla, id);
    }

    async create(tabla, data) {
        return await this.videoRepository.create(tabla, data);
    }

    async update(tabla, data) {
        return await this.videoRepository.update(tabla, data);
    }

    async delete(tabla, data) {
        return await this.videoRepository.delete(tabla, data);
    }

    async getPublic(tabla) {
        return await this.videoRepository.getPublic(tabla);
    }

    async getPrivate(tabla) {
        return await this.videoRepository.getPrivate(tabla);
    }
    async getVideoUsuario(tabla, id) {
        return await this.videoRepository.getVideoUsuario(tabla, id);
    }

    async getCalificacion(tabla, id) {
        return await this.videoRepository.getCalificacion(tabla, id);
    }

}

module.exports = new  VideoService();