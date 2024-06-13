const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || authHeader !== 'Bearer mysecrettoken') {
        return res.status(403).json({ error: 'Forbidden' });
    }

    next();
};

export default authMiddleware;
