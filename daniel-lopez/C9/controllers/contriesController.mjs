let countries = [];
let currentCountryId = 1;

export const getCountries = (req, res) => {
    res.json(countries);
};

export const getCountryById = (req, res) => {
    const country = countries.find(c => c.id === parseInt(req.params.id));
    if (!country) return res.status(404).json({ error: 'Country not found' });
    res.json(country);
};

export const createCountry = (req, res) => {
    const { name, continent } = req.body;
    const newCountry = { id: currentCountryId++, name, continent };
    countries.push(newCountry);
    res.status(201).json(newCountry);
};

export const updateCountry = (req, res) => {
    const { name, continent } = req.body;
    const country = countries.find(c => c.id === parseInt(req.params.id));
    if (!country) return res.status(404).json({ error: 'Country not found' });

    country.name = name || country.name;
    country.continent = continent || country.continent;
    res.json(country);
};

export const deleteCountry = (req, res) => {
    const index = countries.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Country not found' });

    countries.splice(index, 1);
    res.status(204).end();
};