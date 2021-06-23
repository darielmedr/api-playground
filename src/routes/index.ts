import { Express } from 'express';
import countriesRoutes from './countries.routes';
import reverseRoutes from './reverse.routes';
import apiOperationsRoutes from './api-operations.routes';

const routes = (app: Express) => {

    app.use('/countries', countriesRoutes);

    app.use('/reverse', reverseRoutes);

    app.use('/append', apiOperationsRoutes);

};

export default routes;