import express, { Express } from 'express';
import '@database/database';
import { characterRouter } from '@routes/characterRouter';

//Set up express app
const app: Express = express();

//Allow us to use json format
app.use(express.json());

app.use('/api/v1/characters', characterRouter);

export default app;
