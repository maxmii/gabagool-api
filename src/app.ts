import express, { Express, Response, Request } from 'express';
import './database';

//Set up express app
const app: Express = express();

//Allow us to use json format
app.use(express.json());

export default app;
