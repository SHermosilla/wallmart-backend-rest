const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: "No se ha ingresado el token de autorización"
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETKEYJTW);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Token no válido"
        })
    }

}

module.exports = {
    validarJWT
}