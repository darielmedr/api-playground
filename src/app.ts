import 'dotenv/config';

import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import config from 'config';
import log from './logger';

import routes from './routes';


/**
 * Variables
 */
const host: string = config.get('host') as string;
const port: number = config.get('port') as number;

const app = express();


/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());


/**
 * Routes
 */
 routes(app);


/**
 * Server activation
 */
app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);
});

export default app;