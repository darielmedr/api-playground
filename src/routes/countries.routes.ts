import { Request, Response, Router } from "express";
import { oneOf, query } from "express-validator";
import Container from "typedi";
import CountryController from "../controllers/countries.controller";

class Routes {

    private router: Router = Router();

    private controller: CountryController = Container.get(CountryController);

    constructor() {
        this.setRoutes();
    }

    public setRoutes(): void {
        this.router.get('/',
            query('filter', 'filter must be a string').optional().isString(),
            query('order', "order must be 'asc' | 'desc'").optional().isIn(['asc', 'desc']),
            (req: Request, res: Response) => this.controller.getCountries(req, res));
    }

    public getRoutes(): Router {
        return this.router;
    }
}

const routes = new Routes()
export default routes.getRoutes();
