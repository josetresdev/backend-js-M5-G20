
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['12345'];

    if (!authHeader) {
        return res.status(403).json({ error: 'Token de autorización requerido' });
    }

    const token = authHeader.split(' ')[1];

    if (authHeader.startsWith('token ') && token === 'kambcode') {
        next();
    } else {
        res.status(403).json({ error: 'Token de autorización inválido' });
    }
};
