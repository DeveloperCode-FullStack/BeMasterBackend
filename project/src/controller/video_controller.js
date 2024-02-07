const TABLA = 'videos';

class VideoController {

    constructor(dbInjected) {
        this.db = dbInjected;
        if (!dbInjected) {
            this.db = require('../service/video_service');
        }
    };

    /**
     * @swagger
     * tags:
     *   - name: "videos"
     *     description: "Operaciones relacionadas con videos"
     * components:
     *   schemas:
     *     Video:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *         nombre:
     *           type: string
     *         tipo:
     *           type: integer
     *         calificacion:
     *           type: integer
     *         usuario_id:
     *           type: integer
     */

    /**
     * @swagger
     * /api/v1/videos:
     *   get:
     *     summary: Obtener todos los videos
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Lista de videos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Video'
     */
    async getAll() {
        return this.db.getAll(TABLA);
    }

    /**
     * @swagger
     * /api/v1/videos/{id}:
     *   get:
     *     summary: Obtener un video por su ID
     *     tags:
     *       - "videos"
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID del video
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Video encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Video'
     */
    async getById(id) {
        return this.db.getById(TABLA, id);
    }

    /**
     * @swagger
     * /api/v1/videos:
     *   post:
     *     summary: Crear un nuevo video
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Video'
     *     responses:
     *       200:
     *         description: Video creado con éxito
     */
    async create(body) {
        return this.db.create(TABLA, body);
    }

    /**
     * @swagger
     * /api/v1/videos:
     *   put:
     *     summary: Actualizar un video existente
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Video'
     *     responses:
     *       200:
     *         description: Video actualizado con éxito
     */
    async update(body) {
        return this.db.update(TABLA, body);
    }

    /**
     * @swagger
     * /api/v1/videos:
     *   delete:
     *     summary: Eliminar un video
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Video'
     *     responses:
     *       200:
     *         description: Video eliminado con éxito
     */
    async delete(body) {
        return this.db.delete(TABLA, body);
    }

    /**
     * @swagger
     * /api/v1/videos/usuario/{id}:
     *   get:
     *     summary: Obtener videos de un usuario por su ID
     *     tags:
     *       - "videos"
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID del usuario
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Lista de videos del usuario
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Video'
     */
    async getVideoUsuario(id) {
        return this.db.getVideoUsuario(TABLA, id);
    }

    /**
     * @swagger
     * /api/v1/videos/public:
     *   get:
     *     summary: Obtener videos públicos
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Lista de videos públicos
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Video'
     */
    async getPublic() {
        return this.db.getPublic(TABLA);
    }

    /**
     * @swagger
     * /api/v1/videos/private:
     *   get:
     *     summary: Obtener videos privados
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Lista de videos privados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Video'
     */
    async getPrivate() {
        return this.db.getPrivate(TABLA);
    }

    /**
     * @swagger
     * /api/v1/videos/calificacion:
     *   get:
     *     summary: Obtener videos por calificación
     *     tags:
     *       - "videos"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Lista de videos por calificación
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Video'
     */
    async getCalificacion() {
        return this.db.getCalificacion(TABLA);
    }
}

module.exports = VideoController;