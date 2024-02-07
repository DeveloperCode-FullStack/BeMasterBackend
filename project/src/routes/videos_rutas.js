const express = require('express');

const seguridad = require('../middleware/seguridad');
const respuesta = require('../red/respuestas')
const db = require('../service/video_service');
const VideoController = require('../controller/video_controller');

const videoController = new VideoController(db);
const router = express.Router();

router.get('/', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.getAll();
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.post('/', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.create(req.body);
        mensaje = 'Item creado satisfactoriamente'
        respuesta.sucess(req, res, mensaje, 201);
    } catch (error) {
        next(error);
    }
});

router.put('/', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.update(req.body);
        mensaje = 'Item modificado satisfactoriamente'
        respuesta.sucess(req, res, mensaje, 201);
    } catch (error) {
        next(error);
    }
});

router.delete('/', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.delete(req.body);
        respuesta.sucess(req, res, "Item eliminado satisfactoriamente", 200);
    } catch (error) {
        next(error);
    }
})

router.get('/public', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.getPublic();
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.get('/private', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.getPrivate();
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.get('/usuario/:id', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.getVideoUsuario(req.params.id);
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.get('/calificacion', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.getCalificacion();
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', seguridad(), async function (req, res, next) {
    try {
        const items = await videoController.getById(req.params.id);
        respuesta.sucess(req, res, items, 200);
    } catch (error) {
        next(error);
    }
});

module.exports = router;