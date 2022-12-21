import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

//Import routes
import mainRouter from './src/routers';

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(mainRouter);

app.listen(process.env.PORT);