const validationMiddleware = (req, res, next) => {
    const { name, continent } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Invalid name. Name must be a non-empty string.' });
    }

    if (req.url.startsWith('/countries') && (!continent || typeof continent !== 'string' || continent.trim() === '')) {
        return res.status(400).json({ error: 'Invalid continent. Continent must be a non-empty string.' });
    }

    next();
};

export default validationMiddleware;
