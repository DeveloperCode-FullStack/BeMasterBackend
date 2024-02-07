const express = require('express');

const seguridad = require('../middleware/seguridad');
const respuesta = require('../red/respuestas');
const db = require('../service/usuario_service');
const UsuarioController = require('../controller/usuario_controller');

const usuarioController = new UsuarioController(db);
const router = express.Router();

router.get('/', seguridad(), async function (req, res, next) {
    try {
        const items = await usuarioController.getAll();
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.post('/login', async function (req, res, next) {
    try {
        const token = await usuarioController.login(req.body.correo, req.body.contrasena);
        respuesta.sucess(req, res, token, 200);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', seguridad(), async function (req, res, next) {
    try {
        const items = await usuarioController.getById(req.params.id);
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.post('/', seguridad(), async function (req, res, next) {
    try {
        const items = await usuarioController.create(req.body);
        respuesta.sucess(req, res, "Item creado satisfactoriamente", 201);
    } catch (error) {
        next(error);
    }
});

router.put('/', seguridad(), async function (req, res, next) {
    try {
        const items = await usuarioController.update(req.body);
        respuesta.sucess(req, res, "Item modificado satisfactoriamente", 201);
    } catch (error) {
        next(error);
    }
});

router.delete('/', seguridad(), async function (req, res, next) {
    try {
        const items = await usuarioController.delete(req.body);
        respuesta.sucess(req, res, "Item eliminado satisfactoriamente", 200);
    } catch (error) {
        next(error);
    }
});

module.exports = router;