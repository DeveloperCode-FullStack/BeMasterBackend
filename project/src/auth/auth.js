const jwt = require('jsonwebtoken');
config = require('../config/config')

const secret = config.jwt.secret;

function asignarToken(data) {
    return jwt.sign(data, secret);
}

function verificarToken(token){
    return jwt.verify(token, secret);
}

const checkAuth = {
    confirmarToken: function(req){
        const decodificado = decodificarCabecera(req)
    }
}

function obtenerToken(autorizacion){
    if(!autorizacion){
        throw new Error('No viene token');
    }

    if(autorizacion.indexOf('Bearer') === -1){
        throw new Error('Formato invalido');
    }

    let token = autorizacion.replace('Bearer ', '');
    return token;

}

function decodificarCabecera(req){
    const autorizacion = req.query.authorization || '';
    const token = obtenerToken(autorizacion);
    const decodificado = verificarToken(token);

    req.user = decodificado;

    return decodificado;
}

module.exports = {
    asignarToken,
    checkAuth
};