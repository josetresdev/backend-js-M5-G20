import express from 'express';
import dotenv from 'dotenv';
import continentsRoutes from './routes/continentsRoutes.js';
import countriesRoutes from './routes/countriesRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/continents', continentsRoutes);
app.use('/countries', countriesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
