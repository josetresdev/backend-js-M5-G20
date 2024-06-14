const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['12345'];
    const secretKey = process.env.SECRET_KEY;
    if (!authHeader || authHeader !== `kambcode ${secretKey}`) {
        return res.status(403).send('Acceso denegado');
    }
    next();
};

export default authMiddleware;
