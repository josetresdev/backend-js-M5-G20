// ./middlewares/authMiddleware.js
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ message: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1];
    if (token === 'mysecrettoken') {
        next(); // Token válido, continuar con la solicitud
    } else {
        res.status(403).json({ message: 'Invalid authorization token' });
    }
};

module.exports = authMiddleware;
