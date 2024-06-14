import express from 'express';
import countriesRoutes from './routers/countriesRoutes.mjs';
import continentsRoutes from './routers/continentsRoutes.mjs';

const app = express();
app.use(express.json());

app.use('/countries', countriesRoutes);
app.use('/continents', continentsRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});