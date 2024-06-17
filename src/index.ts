import { Response, Request } from 'express';
import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const port = process.env.PORT || 3001;

app.get('/', (res: Response, req: Request) => res.send('Hello world'));

app.listen(port, () =>
  console.log(`[server]: Server is running at http://localhost:${port}`)
);
