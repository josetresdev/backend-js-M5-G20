const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        if (token === 'mysecrettoken') {
            return next(); 
        }
    }

    res.status(403).json({ message: 'Forbidden: Invalid or missing token' });
};

export default authMiddleware;