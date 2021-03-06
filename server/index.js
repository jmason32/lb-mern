import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import shopRoutes from './routes/shops.js'


const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

//ROUTES
app.use('/shops', shopRoutes);


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server rnning on port: ${PORT}`)))
    .catch((error) => console.log(error))


