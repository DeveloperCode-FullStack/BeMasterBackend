exports.sucess = (req, res, mensaje = '', status = 200) => {
    res.status(200).json({
        error: false,
        status: status,
        body: mensaje
    })
}

exports.error = (req, res, mensaje = 'Error interno', status = 500) => {
    res.status(200).json({
        error: true,
        status: status,
        body: mensaje
    })
}