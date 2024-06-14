const validateContinent = (req, res, next) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.trim().length < 3 || name.trim().length > 30) {
        return res.status(400).send('El nombre del continente es requerido y debe tener entre 3 y 30 caracteres.');
    }
    next();
};

const validateCountry = (req, res, next) => {
    const { name, continentId } = req.body;
    if (
        !name || typeof name !== 'string' || name.trim().length < 3 || name.trim().length > 30 ||
        !continentId || typeof continentId !== 'number' || continentId < 1
    ) {
        return res.status(400).send('Nombre del país (entre 3 y 30 caracteres) y ID válido de continente son requeridos.');
    }
    next();
};

export { validateContinent, validateCountry };
