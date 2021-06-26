import 'dotenv/config';

import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import config from 'config';
import log from './logger';
import swaggerJsDoc, { Options } from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import routes from './routes';


/**
 * Variables
 */
const host: string = process.env.HOST || config.get('host') as string;
const port: number = parseInt(<string>process.env.PORT, 10) || config.get('port') as number;

const app = express();

/**
 * Swagger setup
 */
const swaggerOptions: Options = {
    swaggerDefinition: {
        info: {
            title: 'API Playground',
            version: '1.0.3',
        },
    },
    apis: ['./src/routes/*.ts']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


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