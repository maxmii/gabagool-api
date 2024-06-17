import express, { Express, Response, Request } from 'express';

//Set up express app
const app: Express = express();

//Allow us to use json format
app.use(express.json());

export default app;
