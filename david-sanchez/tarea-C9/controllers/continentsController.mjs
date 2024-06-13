let continents = [];
let currentContinentId = 1;

export const getContinents = (req, res) => {
    res.json(continents);
};

export const getContinentById = (req, res) => {
    const continent = continents.find(c => c.id === parseInt(req.params.id));
    if (!continent) return res.status(404).json({ error: 'Continent not found' });
    res.json(continent);
};

export const createContinent = (req, res) => {
    const { name } = req.body;
    const newContinent = { id: currentContinentId++, name };
    continents.push(newContinent);
    res.status(201).json(newContinent);
};

export const updateContinent = (req, res) => {
    const { name } = req.body;
    const continent = continents.find(c => c.id === parseInt(req.params.id));
    if (!continent) return res.status(404).json({ error: 'Continent not found' });

    continent.name = name || continent.name;
    res.json(continent);
};

export const deleteContinent = (req, res) => {
    const index = continents.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Continent not found' });

    continents.splice(index, 1);
    res.status(204).end();
};
