// ./middlewares/authMiddleware.js
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null || token !== 'mysecrettoken') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();
}

export default authMiddleware;
