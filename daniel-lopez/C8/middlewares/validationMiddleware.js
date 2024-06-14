const validationMiddleware = (req, res, next) => {
    const { nombre, edad, mayor } = req.body;

    if (!nombre || typeof nombre !== 'string' || nombre.trim() === '') {
        return res.status(400).json({ message: 'Nombre inválido. El nombre debe ser una cadena que no esté vacía.' });
    }

    if (typeof edad !== 'number' || edad < 0) {
        return res.status(400).json({ message: 'Edad no válida. La edad debe ser un número no negativo.' });
    }

    if (!mayor || typeof mayor !== 'string' || mayor.trim() === '') {
        return res.status(400).json({ message: 'Mayor inválido. Mayor debe ser una cadena que no esté vacía.' });
    }

    next();
};

export default validationMiddleware;