const TABLA = 'usuarios';
const bcrypt = require('bcrypt');
const seguridad = require('../middleware/seguridad');
const auth = require('../auth/auth');

class UsuarioCotroller {

    constructor(dbInjected) {
        if (dbInjected) {
            this.db = dbInjected;
        } else {
            this.db = require('../service/usuario_service');
        }
    }

    /**
     * @swagger
     * tags:
     *   - name: "usuarios"
     *     description: "Operaciones relacionadas con usuarios"
     * components:
     *   schemas:
     *     Usuario:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *         nombre:
     *           type: string
     *         apellido:
     *           type: string
     *         edad:
     *           type: integer
     *         contrasena:
     *           type: string
     *         correo:
     *           type: string
     *         estado:
     *              type: integer
     */

    /**
     * @swagger
     * /api/v1/usuarios:
     *   get:
     *     summary: Obtener todos los usuarios
     *     tags:
     *       - "usuarios"
     *     parameters:
     *       - name: authorization
     *         in: query
     *         schema:
     *           type: string
     *         description: Token de autenticación JWT. Ingrese "Bearer [token]".
     *     responses:
     *       200:
     *         description: Lista de usuarios
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Usuario'
     */
    async getAll() {
        return this.db.getAll(TABLA);
    }

    /**
     * @swagger
     * /api/v1/usuarios/{id}:
     *   get:
     *     summary: Obtener un usuario por su ID
     *     tags:
     *       - "usuarios"
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
     *         description: Usuario encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Usuario'
     */
    async getById(id) {
        return this.db.getById(TABLA, id);
    }

    /**
     * @swagger
     * /api/v1/usuarios:
     *   post:
     *     summary: Crear un nuevo usuario
     *     tags:
     *       - "usuarios"
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
     *             $ref: '#/components/schemas/Usuario'
     *     responses:
     *       200:
     *         description: Usuario creado con éxito
     */
    async create(body) {
        const data = {
            nombre: body.nombre,
            apellido: body.apellido,
            edad: body.edad,
            contrasena: await bcrypt.hash(body.contrasena.toString(), 5),
            correo: body.correo,
            estado: body.estado
        }
        return this.db.create(TABLA, data);
    }

    /**
     * @swagger
     * /api/v1/usuarios:
     *   put:
     *     summary: Actualizar un usuario existente
     *     tags:
     *       - "usuarios"
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
     *             $ref: '#/components/schemas/Usuario'
     *     responses:
     *       200:
     *         description: Usuario actualizado con éxito
     */
    async update(body) {
        const data = {
            id: body.id,
            nombre: body.nombre,
            apellido: body.apellido,
            edad: body.edad,
            contrasena: await bcrypt.hash(body.contrasena.toString(), 5),
            estado: body.estado
        }
        return this.db.update(TABLA, data);
    }

    /**
     * @swagger
     * /api/v1/usuarios:
     *   delete:
     *     summary: Eliminar un usuario
     *     tags:
     *       - "usuarios"
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
     *             $ref: '#/components/schemas/Usuario'
     *     responses:
     *       200:
     *         description: Usuario eliminado con éxito
     */
    async delete(body) {
        return this.db.delete(TABLA, body);
    }

    /**
     * @swagger
     * /api/v1/usuarios/login:
     *   post:
     *     summary: Iniciar sesión de usuario
     *     tags:
     *       - "usuarios"
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               correo:
     *                 type: string
     *               contrasena:
     *                 type: string
     *     responses:
     *       200:
     *         description: Token de autenticación generado con éxito
     */
    async login(correo, contrasena) {
        const data = await this.db.login(TABLA, correo);
        console.log(data);
        return bcrypt.compare(contrasena, data[0].contrasena)
            .then(resultado => {
                if (resultado == true) {
                    return auth.asignarToken({ ...data });
                } else {
                    throw new Error('Información Invalida');
                }
            });
    }
}

module.exports = UsuarioCotroller;