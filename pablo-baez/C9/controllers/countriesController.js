import countries from '../data/countriesData.js';

const getAllCountries = (req, res) => {
    res.json(countries);
};


export default {
    getAllCountries
};
